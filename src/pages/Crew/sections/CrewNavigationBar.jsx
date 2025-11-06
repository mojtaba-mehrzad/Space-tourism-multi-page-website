import React from 'react'

export default function CrewNavigationBar({data, crew, setCrew}) {
  return (
    <nav>
      <ul className="crew-nav-list">
        {data.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => {
                setCrew(item);
              }}
              className={`size-2.5 lg:size-[15px] rounded-full cursor-pointer duration-300 transition-all ${
                crew.name === item.name
                  ? "bg-[#979797]"
                  : "bg-[#979797]/18 hover:bg-[#979797]"
              }`}
            >
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
