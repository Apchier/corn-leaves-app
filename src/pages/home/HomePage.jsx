import cornPlant from '../../../public/assets/image/corn-leaves.png'
import { Camera } from 'lucide-react'

export default function HomePage() {
    return (
        <main className="flex flex-col w-full gap-6">
            <section className="flex flex-col md:flex-row gap-4 min-h-[700px] border bg-[#E7F0DC]">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 text-green-800 gap-3">
                    <h1 className="text-5xl font-bold">Deteksi Penyakit <br /> Daun Jagung</h1>
                    <p className="text-xl">Merevolusi kesehatan pertanian melalui deteksi penyakit canggih berbasis AI. Solusi mutakhir kami membantu petani mengidentifikasi dan mengelola penyakit daun jagung dengan cepat dan akurat.</p>
                    
                    <div className="flex gap-4 mt-4">
                        <button className="flex gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                            <Camera /> Deteksi Sekarang
                        </button>
                        <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-100 transition-colors">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>
                </div>
                <div className="w-full relative md:w-1/2 flex flex-col justify-center items-center gap-6 p-4">
                    <div className="absolute right-0">
                        <img 
                            src={cornPlant} 
                            alt="Tanaman Jagung" 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>
            <section className='flex flex-col md:flex-row gap-4 min-h-[700px] border'></section>
        </main>
    )
}
