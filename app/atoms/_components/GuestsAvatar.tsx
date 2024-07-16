/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { fetchAPI } from "@/lib/utils";

type User = {
  userID: number;
  pseudo: string;
  avatar: string;
};

type GuestsAvatarProps = {
  userIds: number[];
};

const GuestsAvatar = ({ userIds }: GuestsAvatarProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchAPI("/api/users", { method: "GET" });
        const filteredUsers = response.filter((user: User) =>
          userIds.includes(user.userID)
        );
        setUsers(filteredUsers.slice(0, 6));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [userIds]);

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {users.map((user) => (
        <div key={user.userID} className="relative group -mr-4">
          <img
            height={100}
            width={100}
            src={user.avatar}
            alt={user.pseudo}
            className="object-cover rounded-full h-12 w-12 border-2 border-white transition duration-500 group-hover:scale-105 group-hover:z-30"
          />
        </div>
      ))}
    </div>
  );
}

export default GuestsAvatar