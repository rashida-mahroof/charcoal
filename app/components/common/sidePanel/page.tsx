import React from 'react';
import Link from 'next/link';

interface PanelProps {
  isOpen: boolean;
  togglePanel: () => void;
  title: string;
  items: any[];
}

const Panel: React.FC<PanelProps> = ({ isOpen, togglePanel, title, items }) => {
  return (
    <div className={`fixed shadow overflow-y-auto top-0 right-0 w-80 h-screen z-50 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4">
        <div className='flex flex-row items-center justify-between'>
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <button className="text-red-500" onClick={togglePanel}>Close</button>
        </div>

        <div className='flex flex-col'>
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <Link href='/pages/cart' className='w-full bg-[var(--color-flame)] text-[var(--on-primary)] p-2'>View All</Link>
      </div>
    </div>
  );
};

export default Panel;