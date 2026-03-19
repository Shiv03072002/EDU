export default function ArticlesSection() {
  const articles = [
    {
      tag: "NEET GUIDE",
      date: "MAR 13, 2026",
      title: "How To Prepare For NEET In 6 Months",
    },
    {
      tag: "STUDY TIPS",
      date: "MAR 14, 2026",
      title: "Top Study Strategies To Crack JEE Main",
    },
    {
      tag: "STUDY TIPS",
      date: "MAR 15, 2026",
      title: "How To Build An Effective Daily Study Routine",
    },
    {
      tag: "CBSE GUIDE",
      date: "MAR 15, 2026",
      title: "Best Study Plan For Class 12 Board Exams",
    },
  ];

  const news = [
    {
      title: "Top Study Strategies To Crack JEE Main",
      date: "APR 05, 2026",
    },
    {
      title: "CBSE Releases Updated Exam Pattern For Class 10",
      date: "APR 03, 2026",
    },
    {
      title: "CUET 2026 Registration Process Begins",
      date: "APR 01, 2026",
    },
  ];

  const checkerStyle = (size = 16) => ({
    backgroundImage: `
      linear-gradient(45deg, #e5e7eb 25%, transparent 25%),
      linear-gradient(-45deg, #e5e7eb 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #e5e7eb 75%),
      linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)
    `,
    backgroundSize: `${size}px ${size}px`,
    backgroundPosition: `0 0, 0 ${size / 2}px, ${size / 2}px -${size / 2}px, -${size / 2}px 0px`,
    backgroundColor: "#f9fafb",
  });

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorations */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-0 h-0 
        border-l-[12px] border-l-transparent 
        border-r-[12px] border-r-transparent 
        border-b-[18px] border-b-gray-300 opacity-50"
      />

      <div className="absolute top-44 left-1/2 -translate-x-1/2 grid grid-cols-3 gap-4 opacity-40">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        ))}
      </div>

      <div className="absolute right-0 top-[68%] grid grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        ))}
      </div>

      <div
        className="absolute right-20 top-[71%] w-0 h-0 
    border-t-[10px] border-t-transparent 
    border-b-[10px] border-b-transparent 
    border-r-[16px] border-r-green-500"
      />

      <div className="absolute bottom-23  right-54 w-[320px] h-[180px] ">
        <img
          src="/images/articles/hand.png"
          alt="shape"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[340px] h-[180px] ">
        <img
          src="/images/articles/element.png"
          alt="shape"
          className="w-full h-full "
        />
      </div>

      {/* Main Content Container */}
      <div className="px-6 md:px-16">
        {/* Header - Separate from grid */}
        <div className="relative mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
              LATEST ARTICLES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 max-w-120">
              Helpful Guides To Boost Your Exam Preparation
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:max-w-md">
            Explore study strategies, exam preparation tips, and helpful guides
            designed to support your learning journey.
          </p>
        </div>

        {/* Grid Layout - 50/50 Split */}
        <div className="relative flex justify-between gap-6">
          {/* LEFT - Articles (50%) */}
         <div>
  <div className="grid sm:grid-cols-3 gap-6">
    {articles.map((item, i) => (
      <div key={i} className="group cursor-pointer">
        <div
          className="w-full h-44 rounded-xl"
          style={checkerStyle(16)}
        />

        <div className="mt-3 text-base text-gray-400 flex gap-2">
          <span className="font-medium">{item.tag}</span>
          <span>•</span>
          <span>{item.date}</span>
        </div>

        <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-blue-600 text-lg leading-snug max-w-60">
          {item.title}
        </h3>
      </div>
    ))}
  </div>
</div>
          {/* RIGHT - News (50%) */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Latest News
            </h3>

            <div className="space-y-6">
              {news.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-24 h-16 rounded-md flex-shrink-0"
                    style={checkerStyle(10)}
                  />

                  <div>
                    <div className="text-xs text-gray-400 mb-1 font-medium tracking-wide">
                      EXAM UPDATE &nbsp;•&nbsp; {item.date}
                    </div>
                    <p className="text-sm font-semibold text-gray-900 leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
