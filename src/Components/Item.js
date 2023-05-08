
export default function Item() {
  return (
    <li class="relative mt-5 p-6 bg-yellow-200 text-gray-900 rounded shadow-md transition-transform hover:-translate-y-1 will-change-transform ">
                <h3 class="flex justify-between align-center items-center">
                    <span class="text-xl font-medium">Titre de la tâche</span>
                    <button class="p-1 font-semibold text-sm rounded-sm shadow-sm ring ring-red-400 hover:ring-red-500">
                    ❌
                    </button>
                </h3>
            </li>
  )
}
