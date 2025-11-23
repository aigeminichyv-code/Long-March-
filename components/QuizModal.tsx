import React, { useState, useEffect } from 'react';
import { HelpCircle, X } from 'lucide-react';
import { Quiz } from '../types';

interface QuizModalProps {
  quiz: Quiz;
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ quiz, isOpen, onClose }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelected(null);
      setShowResult(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCheck = () => {
    if (selected !== null) setShowResult(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 border-4 border-amber-600 animate-fade-in-zoom">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-amber-800 flex items-center gap-2">
            <HelpCircle className="w-6 h-6" /> 隨堂小測驗
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-lg font-medium text-gray-800 mb-6">{quiz.question}</p>
        
        <div className="space-y-3 mb-6">
          {quiz.options.map((option, idx) => {
            let btnClass = "w-full text-left p-3 rounded-lg border-2 transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-200 ";
            if (showResult) {
              if (idx === quiz.answer) btnClass += "bg-green-100 border-green-500 text-green-800 font-bold shadow-sm";
              else if (idx === selected && idx !== quiz.answer) btnClass += "bg-red-100 border-red-500 text-red-800 opacity-80";
              else btnClass += "border-gray-200 opacity-50";
            } else {
              btnClass += selected === idx 
                ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm" 
                : "border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 text-gray-700";
            }

            return (
              <button 
                key={idx} 
                onClick={() => !showResult && setSelected(idx)}
                className={btnClass}
                disabled={showResult}
              >
                <div className="flex justify-between items-center">
                  <span>{option}</span>
                  {showResult && idx === quiz.answer && <span className="text-green-600 font-bold">✓</span>}
                  {showResult && idx === selected && idx !== quiz.answer && <span className="text-red-600 font-bold">✗</span>}
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end">
          {!showResult ? (
            <button 
              onClick={handleCheck}
              disabled={selected === null}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
            >
              提交答案
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-stone-800 text-white rounded-lg font-bold hover:bg-stone-900 transition-all transform active:scale-95"
            >
              繼續行程
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;