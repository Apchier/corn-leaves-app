import {
    ScanSearch,
    TrendingUp,
    Shield
} from 'lucide-react'

const Features = () => {
    const featuresList = [
        {
            icon: ScanSearch,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.'
        },
        {
            icon: TrendingUp,
            title: 'Dolor Consectetur',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        },
        {
            icon: Shield,
            title: 'Adipiscing Elit',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
        }
    ]

    return (
        <section id="features" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Lorem Ipsum Dolor</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {featuresList.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <feature.icon className="mx-auto mb-4 w-12 h-12 text-green-500" />
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features