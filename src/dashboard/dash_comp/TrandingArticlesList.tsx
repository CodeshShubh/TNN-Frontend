const TrandingArticlesList = () => {
    const Articles = [
        {
            title: "Breaking: Major Political Development Shakes Nation",
            author: "Sarah Johnson",
            category: "Politics",
            viewsCount: "12,543",
        },
        {
            title: "Sports Championship Finals Draw Record Audience",
            author: "Mike Chen",
            category: "Sports",
            viewsCount: "8,976",
        },
        {
            title: "New Tech Innovation Promises to Revolutionize Industry",
            author: "Alex Rodriguez",
            category: "Technology",
            viewsCount: "7,521",
        },
        {
            title: "Celebrity Wedding Creates Social Media Buzz",
            author: "Emma Davis",
            category: "Entertainment",
            viewsCount: "6,789",
        },
    ]
    return (
        <div className="mb-10 p-5 border border-gray-300 mt-5 w-[97%] mx-auto rounded">
            <div>
                <h1 className="font-medium text-sm">Trending Articles</h1>
                <p className="font-light text-xs text-gray-500">Most popular articles this week</p>
            </div>
            {/* listCards */}
            {
                Articles.map((itm, i) => (
                    <div key={i} className="border border-gray-300 shadow rounded flex w-full justify-between items-center mt-5 p-4">
                        <div className="flex items-center gap-2">
                            <h1 className="bg-black border rounded-full text-center pt-1 font-bold h-8 w-8  text-white">{i+1}</h1>
                            <div>
                                <h2 className="text-black">{itm.title}</h2>
                                <p className="font-light text-xs text-gray-500">By {itm.author}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <h2 className="text-xs bg-gray-300 p-1 px-2 rounded-3xl font-medium text-black">{itm.category}</h2>
                            <div className="text-end">
                                <h1 className="font-medium text-black">{itm.viewsCount}</h1>
                                <p className="font-light text-xs text-gray-500">views</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default TrandingArticlesList