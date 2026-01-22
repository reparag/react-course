import React from 'react';

function TailwindCard({ username = 'Parag', role = 'Sr Software Developer' }) {
  return (
    <div class="flex flex-col min-w-3xs items-center gap-2 p-0 md:flex-row md:gap-8 rounded-md border mb-4">
      <div>
        <img
          class="size-48 w-full shadow-xl rounded-md"
          alt=""
          src="https://images.pexels.com/photos/2078751/pexels-photo-2078751.jpeg"
        />
      </div>
      <div class="flex flex-col w-full items-start md:items-start px-4 mb-4">
        <span class="text-2xl font-medium">{username}</span>
        <span class="font-medium text-sky-500">{role}</span>
        <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default TailwindCard;
