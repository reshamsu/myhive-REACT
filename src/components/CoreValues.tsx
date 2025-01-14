import React from 'react'

const CoreValues: React.FC = () => {
  return (
    <div className='mt-10 text-center bg-zinc-800 p-10'>
        <h3 className="text-2xl font-semibold text-gray-500">Core Values</h3>
        <div className="mt-6 flex justify-center">
          <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Innovation",
                description: "We strive to be at the forefront of technology.",
              },
              {
                title: "Security",
                description: "Safeguarding sensitive data and transactions.",
              },
              {
                title: "Efficiency",
                description:
                  "Streamlining processes to save time and reduce errors.",
              },
              {
                title: "Scalability",
                description: "Growing with your business needs.",
              },
              {
                title: "Trust",
                description: "Building reliable and transparent partnerships.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-amber-500 p-6 rounded-lg shadow-md text-left"
              >
                <h4 className="text-xl font-semibold text-zinc-900">
                  {value.title}
                </h4>
                <p className="mt-2 text-zinc-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default CoreValues