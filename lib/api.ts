export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://13-127-244-179.sslip.io";

// ── Types ─────────────────────────────────────────────────────────────────────

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string | null;
  category?: string | null;
  readTime?: string | null;
  published: boolean;
  authorId: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  canonicalUrl?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Appointment = {
  id: string;
  parentName: string;
  email?: string | null;
  phone: string;
  childName?: string | null;
  childAge?: number | null;
  concern?: string | null;
  message?: string | null;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  createdAt: string;
  updatedAt: string;
};

// ── Blog ──────────────────────────────────────────────────────────────────────

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_URL}/blog`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_URL}/blog/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function getAllPostsAdmin(token: string): Promise<BlogPost[]> {
  const res = await fetch(`${API_URL}/blog?all=true`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export async function createPost(
  token: string,
  data: Partial<BlogPost>
): Promise<BlogPost | { error: string }> {
  const res = await fetch(`${API_URL}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) return { error: json.message ?? "Failed to create post" };
  return json;
}

export async function updatePost(
  token: string,
  id: string,
  data: Partial<BlogPost>
): Promise<BlogPost | null> {
  const res = await fetch(`${API_URL}/blog/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) return null;
  return res.json();
}

export async function deletePost(token: string, id: string): Promise<boolean> {
  const res = await fetch(`${API_URL}/blog/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.ok;
}

// ── Appointments ──────────────────────────────────────────────────────────────

export async function createAppointment(data: object): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${API_URL}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      return { ok: false, error: (json as { message?: string }).message ?? "Submission failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}

export async function getAppointments(
  token: string,
  status?: string
): Promise<Appointment[]> {
  const url = status
    ? `${API_URL}/appointments?status=${status}`
    : `${API_URL}/appointments`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export async function updateAppointmentStatus(
  token: string,
  id: string,
  status: "PENDING" | "CONFIRMED" | "CANCELLED"
): Promise<boolean> {
  const res = await fetch(`${API_URL}/appointments/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  return res.ok;
}

export async function uploadImage(token: string, file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${API_URL}/upload/image`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.url as string; // e.g. "/uploads/123456-photo.jpg"
}

// ── Auth ──────────────────────────────────────────────────────────────────────

export async function signIn(
  email: string,
  password: string
): Promise<{ token: string; user: { name: string; email: string } } | null> {
  try {
    const res = await fetch(`${API_URL}/api/auth/sign-in/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
