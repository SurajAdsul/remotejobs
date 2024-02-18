import Layout from "../layouts/layout.tsx";
import CheckMark from "../components/CheckMark.tsx";

const Pricing = () => {
    return (
        <Layout>
            <section>
                <div className="relative mt-20 items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
                    <div>
                        <div
                            className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 rounded-xl">
                            <div className="relative flex flex-col p-8 bg-white">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-neutral-600">Basic</h3>
                                    <p className="flex items-baseline mt-4 text-neutral-600">
                                        <span className="text-5xl font-extrabold tracking-tight">$24</span>
                                        <span className="ml-1 text-xl font-semibold">/month</span>
                                    </p>
                                    <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                        <span className="text-lg font-semibold text-neutral-600">What's included?</span>
                                        <li className="flex">
                                            <CheckMark/>
                                            <span className="ml-3 text-neutral-600">Listed on remotejobs</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark/>
                                            <span
                                                className="ml-3 text-neutral-600">Shared in remotejobs slack channel</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark/>
                                            <span className="ml-3 text-neutral-600">Shared in daily email updates</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark/>
                                            <span className="ml-3 text-neutral-600">Social media shares</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-6 rounded-lg">
                                    <a href="#" type="highlight"
                                       className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get
                                        Started </a>
                                </div>
                            </div>
                            <div className="relative flex flex-col p-8 bg-blue-600 rounded-2xl">
                                <div className="relative flex-1">
                                    <h3 className="text-xl font-semibold text-white">Premium</h3>
                                    <p className="flex items-baseline mt-4 text-white">
                                        <span className="text-5xl font-extrabold tracking-tight">$32</span>
                                        <span className="ml-1 text-xl font-semibold">/month</span>
                                    </p>
                                    <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                                        <span className="text-lg font-semibold text-white">What's included?</span>
                                        <li className="flex">
                                            <CheckMark active/>
                                            <span className="ml-3 text-white">Listed on remotejobs</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark active/>
                                            <span className="ml-3 text-white">Shared in remotejobs slack channel</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark active/>
                                            <span className="ml-3 text-white">Shared in daily email updates</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark active/>
                                            <span className="ml-3 text-white">Social media shares</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark active/>
                                            <span className="ml-3 text-white">Highlight your position</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark active/>
                                            <span className="ml-3 text-white">Pin position for 7 days</span>
                                        </li>
                                        <li className="flex">
                                            <CheckMark active/>
                                            <span className="ml-3 text-white">Support</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="z-50 mt-6 rounded-lg">
                                    <a href="/pricing" type="highlight"
                                       className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get
                                        started </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Pricing;