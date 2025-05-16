import { Leaf, Target, Users } from 'lucide-react'

const About = () => {
    return (
        <section id='about' className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-green-700">Lorem Ipsum</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <Leaf className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="text-xl font-semibold mb-3">Lorem Dolor</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac finibus lacus.
                        </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <Target className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="text-xl font-semibold mb-3">Consectetur</h3>
                        <p className="text-gray-600">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.
                        </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <Users className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="text-xl font-semibold mb-3">Adipiscing</h3>
                        <p className="text-gray-600">
                            Mauris consectetur tellus non consectetur dignissim. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About