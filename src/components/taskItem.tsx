import { Trash2 } from "lucide-react"

export function TaskItem(){
  return (
    <div className='w-full gap-3 p-4 flex rounded-lg bg-gray-500 border border-gray-400 justify-between'>
      <div className="flex gap-3 max-w-2xl">
        <label className='pt-0.5 cursor-pointer min-w-5 min-h-5 relative'>
          <input type="checkbox" className='w-5 h-5'/>
          <span className="absolute w-full h-full left-0 top-0"></span>
        </label>
        <p className='text-gray-100 leading-normal'>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </div>
      <div>
        <button className="">
          <Trash2 className='size-6 text-gray-300' />
        </button>
      </div>  
    </div>
  )
}