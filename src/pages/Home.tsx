import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FounderSection from '../components/FounderSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://scontent.fmab1-1.fna.fbcdn.net/v/t39.30808-6/317686701_812158513535569_6818723085750289242_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEvLzKDBscENxIk8ad0dX0wIw7Jt2QzyUMjDsm3ZDPJQwGt66AMoFLBTFtHDXJyNNtmZ7RUZ0PVL5SkyGQkHlrk&_nc_ohc=oEAKcazdQtYQ7kNvgFtakNj&_nc_zt=23&_nc_ht=scontent.fmab1-1.fna&_nc_gid=AobV8077p6dysxu8d7M7UC7&oh=00_AYCZCzBphg_Lrq0ko2odvkzjBaqNO-oJAiOS-aiAl0JOlA&oe=676644BF')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Domine a arte do jiu-jitsu brasileiro com a equipe vilhena jiu-jitsu
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