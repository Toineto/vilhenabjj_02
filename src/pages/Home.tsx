import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FounderSection from '../components/FounderSection';
import ChildBenefits from '../components/ChildBenefits';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://scontent.fmab1-1.fna.fbcdn.net/v/t51.75761-15/464254618_17955144236836054_6668139842122723727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFcr1Zr2wPKVGs4_8ekrF1RMMmq7DiWyMUwyarsOJbIxVr1RR3ZzV32oYuFHSRakco5ecPqeKE5VY_8YeEvTiGl&_nc_ohc=vMFBIqlroTEQ7kNvgGEbFYp&_nc_oc=AdgW968W41SWs6dtI4A3Dyzp56oOY88hRukEgai_IL8ckvBFeNSWBQdBJaHAYLKR82GlUDPzx8cBfQ789J3UYoYJ&_nc_zt=23&_nc_ht=scontent.fmab1-1.fna&_nc_gid=AfAAm7YDod9yl-Dd5Qwoxas&oh=00_AYAbyzPHerxNxlPh4QbFGdfirz24b8Z_X8M64UG1sGt7ng&oe=676697AB')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Domine a arte do jiu-jitsu brasileiro com a Equipe Vilhena jiu-jitsu
              </h1>
              <p className="text-xl mb-8">
              Junte-se à nossa academia e transforme sua vida através da disciplina, respeito e técnica
              </p>
              <Link
                to="/locations"
                className="bg-red-600 text-white px-8 py-3 rounded-lg inline-flex items-center hover:bg-red-700"
              >
                Comece o treinamento<ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Founder Section */}
      <FounderSection />
      <ChildBenefits />
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Instrução de especialista</h3>
              <p className="text-gray-600">Aprenda com instrutores faixa preta com décadas de experiência</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Vários locais</h3>
              <p className="text-gray-600">Instalações de treinamento convenientes por todo o país</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Todos os níveis de habilidade</h3>
              <p className="text-gray-600">Programas para iniciantes e praticantes avançados</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-xl text-gray-600 mb-8">
          Junte-se a nós para uma aula experimental gratuita e experimente o poder do BJJ
          </p>
          <Link
            to="/locations"
            className="bg-black text-white px-8 py-3 rounded-lg inline-flex items-center hover:bg-gray-800"
          >
            Encontre um local <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}