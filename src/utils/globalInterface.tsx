export interface User {
  id?: number;
  fullname?: string | null;
  dob?: string | null;
  gender?: string | null;
  email?: string | null;
  phone?: string | null;
  height?: number | null;
  weight?: number | null;
  roleId?: number | null;
  doctorId?: number | null;
  avatar?: string | null;
  avatarUrl?: string | null;
  clinicId?: number | null;
}

export interface Doctor {
  id?: number;
  userId?: number | null;
  price?: number | null;
  disc?: number | null;
  ratingPercent?: string | null;
  feedbackCount?: string | null;
  specialization?: string | null;
  clinicId?: number | null;
  noStr?: string | null;
  user?: User | null;
}

export interface Pagination {
  currentPage?: number;
  totalItems?: number;
  totalPages?: number;
}
