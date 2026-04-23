import Header from './components/Header';
import Intro from './components/Intro';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import './App.css';

const APPS_DATA = [
  {
    id: 'gpa',
    href: 'https://avishka-55.github.io/OUSL-GPA-Analyzer/',
    icon: '📊',
    tag: 'Analytics',
    name: 'GPA Analyzer',
    desc: 'Upload your grade sheet and get instant GPA breakdown, degree classification, and what-if projections.',
    features: [
      'Real-time GPA calculation',
      'Honours & General degree support',
      'What-if scenario simulator',
      'PDF export'
    ]
  },
  {
    id: 'course-planner',
    href: 'https://avishka-55.github.io/OUSL-Course-Planner/',
    icon: '🗓️',
    tag: 'Planning',
    name: 'Course Planner',
    desc: 'Plan your semester courses and calculate fees. Pick your subjects and visualise your full degree path.',
    features: [
      'Semester-wise course planning',
      'Credit & fee calculation · 2025/2026',
      'BSc General & Honours support',
      'Subject combination picker'
    ]
  },
  {
    id: 'grade-calculator',
    href: 'https://avishka-55.github.io/OUSL-GRADE-CALCULATOR/',
    icon: '🧮',
    tag: 'Calculator',
    name: 'Grade Calculator',
    desc: 'Enter your current marks and target grade to find out exactly what you need on your final exam.',
    features: [
      'Final exam mark estimator',
      'Weighted assessment breakdown',
      'Multiple course tracking',
      'Pass/fail threshold alerts'
    ]
  }
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <div className="cards">
          {APPS_DATA.map((app) => (
            <AppCard key={app.id} {...app} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
