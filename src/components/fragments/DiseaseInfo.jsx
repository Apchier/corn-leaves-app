import Leaves from '../../assets/image/corn-leaves.png'  
import { Eye } from 'lucide-react'  

const DiseaseInfo = () => {  
    const diseaseList = [  
        {  
            image: Leaves,  
            title: 'Lorem Ipsum Dolor',  
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',  
            symptoms: [  
                'Lorem ipsum dolor sit amet',  
                'Consectetur adipiscing elit sed',  
                'Eiusmod tempor incididunt ut'  
            ],  
            treatment: [  
                'Ut labore et dolore magna',  
                'Aliqua enim ad minim veniam',  
                'Quis nostrud exercitation'  
            ]  
        },  
        {  
            image: Leaves,  
            title: 'Consectetur Adipiscing',  
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',  
            symptoms: [  
                'Magna aliqua enim ad minim',  
                'Veniam quis nostrud exercitation',  
                'Ullamco laboris nisi ut'  
            ],  
            treatment: [  
                'Aliquip ex ea commodo',  
                'Consequat duis aute irure',  
                'Dolor in reprehenderit'  
            ]  
        },  
        {  
            image: Leaves,  
            title: 'Tempor Incididunt',  
            description: 'Ut enim ad minim veniam, quis nostrud exercitation.',  
            symptoms: [  
                'Voluptate velit esse cillum',  
                'Dolore eu fugiat nulla',  
                'Pariatur excepteur sint'  
            ],  
            treatment: [  
                'Occaecat cupidatat non',  
                'Proident sunt in culpa',  
                'Qui officia deserunt'  
            ]  
        }  
    ]  

    return (  
        <section id='disease-info' className="py-16 bg-gray-50">  
            <div className="container mx-auto px-4">  
                <div className="text-center mb-12">  
                    <h2 className="text-3xl font-bold text-primary-600 mb-4">  
                        Lorem Ipsum Information  
                    </h2>  
                    <p className="text-secondary-600 max-w-2xl mx-auto text-lg">  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.  
                    </p>  
                </div>  

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
                    {diseaseList.map((item, index) => (  
                        <div   
                            key={index}   
                            className="bg-white rounded-lg border border-gray-200   
                            overflow-hidden shadow-md hover:shadow-lg transition-shadow"  
                        >  
                            <img   
                                src={item.image}   
                                alt={item.title}   
                                className="w-full h-64 object-cover px-2 py-4"  
                            />  
                            <div className="p-4">  
                                <h3 className="text-xl font-semibold text-primary-600 mb-2">  
                                    {item.title}  
                                </h3>  
                                <p className="text-secondary-600 mb-4">  
                                    {item.description}  
                                </p>  

                                <h4 className="font-bold mb-2 text-gray-700">Lorem Ipsum:</h4>  
                                <ul className="list-disc pl-5 mb-4 text-secondary-600">  
                                    {item.symptoms.map((symptom, idx) => (  
                                        <li key={idx} className="text-sm">{symptom}</li>  
                                    ))}  
                                </ul>  

                                <h4 className="font-bold mb-2 text-gray-700">Dolor Sit:</h4>  
                                <ul className="list-disc pl-5 text-secondary-600">  
                                    {item.treatment.map((treat, idx) => (  
                                        <li key={idx} className="text-sm">{treat}</li>  
                                    ))}  
                                </ul>  

                                <button   
                                    className="w-full mt-4 px-4 py-2 bg-primary-600   
                                    text-white rounded-md hover:bg-primary-700   
                                    flex items-center justify-center gap-2 transition-colors"  
                                >  
                                    <Eye size={20} />  
                                    Lorem Ipsum  
                                </button>  
                            </div>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </section>  
    )  
}  

export default DiseaseInfo