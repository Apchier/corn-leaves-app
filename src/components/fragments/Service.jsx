import {
    Stethoscope,
    BookOpen,
    Settings,
    Database
} from 'lucide-react'

const Services = () => {
    const servicesList = [
        {
            icon: Stethoscope,
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.'
        },
        {
            icon: BookOpen,
            title: 'Dolor Consectetur',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
        },
        {
            icon: Settings,
            title: 'Adipiscing Elit',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
        },
        {
            icon: Database,
            title: 'Sit Amet',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
        }
    ]

    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-green-700">Lorem Ipsum Services</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className="bg-green-50 p-6 rounded-lg text-center hover:shadow-lg transition"
                        >
                            <service.icon className="mx-auto mb-4 w-12 h-12 text-green-600" />
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services