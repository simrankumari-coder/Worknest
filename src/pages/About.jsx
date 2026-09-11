import React from 'react'


const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Hero */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">
                    About WorkNest
                </h1>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    WorkNest helps you discover comfortable and productive
                    workspaces that fit your needs, whether you are working alone
                    or with a team.
                </p>
            </div>

            {/* What We Do */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        What We Do
                    </h2>

                    <p className="text-gray-600 leading-7">
                        We make it easy to explore different workspaces by location,
                        price, and workspace type. You can view workspace details,
                        compare your options, and find a place that works for you.
                    </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">
                        Why WorkNest?
                    </h3>

                    <ul className="space-y-3 text-gray-600">
                        <li>✓ Easy workspace discovery</li>
                        <li>✓ Simple search and filters</li>
                        <li>✓ Clear workspace details</li>
                        <li>✓ Flexible options for different needs</li>
                    </ul>
                </div>

            </div>

            {/* Mission */}
            <div className="text-center bg-gray-100 rounded-2xl p-10">

                <h2 className="text-2xl font-semibold mb-4">
                    Our Mission
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto leading-7">
                    Our goal is to make finding the right workspace simple,
                    convenient, and accessible. WorkNest brings useful workspace
                    information together in one place so you can focus on your work.
                </p>

            </div>

        </div>
    );
}
export default About

