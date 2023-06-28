import { User } from "@prisma/client";

export type safeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
    createAt: string;
    updateAt: string;
    emailVerified: string | null;
};
