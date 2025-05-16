import { useState } from 'react'
import {
    MapPin,
    Mail,
    Phone,
    Send
} from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-green-700">Lorem Ipsum</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-green-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-green-700">Lorem Ipsum Information</h3>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <MapPin className="w-6 h-6 text-green-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Mail className="w-6 h-6 text-green-600" />
                                <span>lorem@ipsum.com</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Phone className="w-6 h-6 text-green-600" />
                                <span>+00 123-456-7890</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold mb-4 text-green-700">Lorem Adipiscing</h4>
                            <p>Lorem - Dolor: 09.00 - 17.00</p>
                            <p>Consectetur: 10.00 - 14.00</p>
                            <p>Adipiscing & Elit: Tempor</p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-gray-700">Lorem Ipsum</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Lorem ipsum dolor"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-gray-700">Consectetur</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="consectetur@adipiscing.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-gray-700">Adipiscing Elit</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Sed do eiusmod tempor incididunt"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
                            >
                                <Send className="mr-2 w-5 h-5" />
                                Lorem Ipsum
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact