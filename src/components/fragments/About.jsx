import { Cpu, Target, Users } from 'lucide-react'

const About = () => {
    return (
        <section id='about' className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-green-700">Tentang</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Alat kami yang didukung oleh CNN membantu petani mengidentifikasi penyakit pada daun jagung 
                    dengan cepat dan akurat, memungkinkan pencegahan dini dan perlindungan pada tanaman jagung.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <Cpu className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="text-xl font-semibold mb-3">Teknologi AI Terkini</h3>
                        <p className="text-gray-600">
                        Model CNN kami mengenali pola visual pada daun
                         secara cerdas untuk mendeteksi berbagai jenis penyakit secara otomatis.
                        </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <Target className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="text-xl font-semibold mb-3">Akurat & Efisien</h3>
                        <p className="text-gray-600">
                            Analisis dilakukan dalam hitungan detik dengan hasil yang presisi 
                            untuk memudahkan pengambilan keputusan cepat di lapangan.
                        </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg text-center">
                        <Users className="mx-auto mb-4 w-12 h-12 text-green-600" />
                        <h3 className="text-xl font-semibold mb-3">Praktis</h3>
                        <p className="text-gray-600">
                            Desain antarmuka sederhana memungkinkan siapa pun untuk menggunakan pendeteksi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About