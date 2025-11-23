import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, BookOpen, HelpCircle, Info, Flag, Star, X, Users, Tent, Flame } from 'lucide-react';
import { MILESTONES } from './constants';
import QuizModal from './components/QuizModal';
import MapView from './components/MapView';

type TabType = 'history' | 'figures' | 'survival';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('history');

  const currentData = MILESTONES[currentStep];

  const handleNext = () => {
    if (currentStep < MILESTONES.length - 1) {
      setCurrentStep(prev => prev + 1);
      setActiveTab('history'); // Reset tab on navigate
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setActiveTab('history'); // Reset tab on navigate
    }
  };

  return (
    <div className="flex flex-col h-screen bg-stone-100 text-stone-800 font-sans overflow-hidden selection:bg-red-200">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-red-900 to-red-800 text-yellow-50 p-3 md:p-4 shadow-xl flex justify-between items-center z-20 relative border-b-4 border-yellow-600/50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-500 text-red-900 p-1.5 md:p-2 rounded-full shadow-lg border-2 border-red-900">
            <Flag size={20} className="md:w-6 md:h-6" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wider drop-shadow-sm">長征</h1>
            <p className="text-[10px] md:text-xs text-yellow-200/80 font-medium tracking-wide">二萬五千里交互式教學地圖</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowIntro(true)}
            className="text-xs md:text-sm bg-red-950/30 hover:bg-red-950/50 px-3 py-1.5 rounded-full border border-red-700/50 transition-all flex items-center gap-1 hover:gap-2 shadow-inner"
          >
            <Info size={14} />
            <span className="hidden sm:inline">教學指南</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden relative">
        
        {/* Left/Top: Map Area */}
        <div className="w-full md:w-7/12 lg:w-2/3 h-[40vh] md:h-full p-2 md:p-6 bg-[#dcd3c1] relative shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
           <MapView currentStep={currentStep} onNodeClick={(idx) => { setCurrentStep(idx); setActiveTab('history'); }} />
           
           {/* Mobile Progress Overlay */}
           <div className="absolute bottom-4 left-4 right-4 md:hidden bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg text-center text-xs font-bold text-red-800 border border-red-100 flex justify-between items-center z-10">
              <span className="text-stone-500">當前進度</span>
              <span className="bg-red-100 px-2 py-1 rounded text-red-700 shadow-sm">{currentStep + 1} / {MILESTONES.length}</span>
           </div>
        </div>

        {/* Right/Bottom: Details Area */}
        <div className="w-full md:w-5/12 lg:w-1/3 h-[60vh] md:h-full bg-white shadow-2xl z-10 flex flex-col border-l border-stone-300">
          
          {/* Navigation Controls */}
          <div className="p-3 md:p-4 border-b border-stone-200 flex justify-between items-center bg-stone-50/90 backdrop-blur-sm shrink-0">
            <button 
              onClick={handlePrev} 
              disabled={currentStep === 0}
              className="flex items-center gap-1 px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-stone-200 text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 font-medium border border-transparent hover:border-stone-300 text-sm md:text-base"
            >
              <ChevronLeft size={18} /> <span className="hidden sm:inline">上一站</span>
            </button>
            
            <span className="font-mono text-stone-500 font-bold bg-stone-200/50 px-4 py-1 rounded-full shadow-inner border border-stone-200 text-sm">
              {currentStep + 1} <span className="text-stone-300 mx-1">/</span> {MILESTONES.length}
            </span>

            <button 
              onClick={handleNext} 
              disabled={currentStep === MILESTONES.length - 1}
              className="flex items-center gap-1 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-red-900 text-yellow-50 hover:bg-red-800 disabled:opacity-50 disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed transition-all shadow-md active:scale-95 font-medium group border border-red-950 text-sm md:text-base"
            >
              <span className="hidden sm:inline">下一站</span> <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Static Header Info (Location & Title) */}
          <div className="px-6 pt-6 pb-2 bg-white shrink-0">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-red-800 font-bold text-xs md:text-sm uppercase tracking-widest opacity-80">
                  <MapPin size={14} className="animate-bounce" /> 
                  {currentData.location}
               </div>
               <div className="flex items-center gap-1 text-stone-500 text-xs font-mono bg-stone-100 px-2 py-1 rounded border border-stone-200">
                  {currentData.stat.icon === 'users' ? <Users size={12}/> : <Info size={12} />}
                  <span className="font-bold">{currentData.stat.label}:</span> {currentData.stat.value}
               </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mt-2 mb-1 leading-tight tracking-tight">
              {currentData.title}
            </h2>
             <div className="text-stone-500 text-sm font-medium mb-4 border-b border-stone-100 pb-4">
                {currentData.date}
             </div>
             
             {/* Tab Navigation */}
             <div className="flex space-x-1 bg-stone-100 p-1 rounded-lg mb-2">
                <button 
                   onClick={() => setActiveTab('history')}
                   className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs md:text-sm font-bold transition-all ${activeTab === 'history' ? 'bg-white text-red-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                >
                   <BookOpen size={14} /> 歷史事件
                </button>
                <button 
                   onClick={() => setActiveTab('figures')}
                   className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs md:text-sm font-bold transition-all ${activeTab === 'figures' ? 'bg-white text-blue-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                >
                   <Users size={14} /> 關鍵人物
                </button>
                <button 
                   onClick={() => setActiveTab('survival')}
                   className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs md:text-sm font-bold transition-all ${activeTab === 'survival' ? 'bg-white text-amber-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                >
                   <Tent size={14} /> 行軍點滴
                </button>
             </div>
          </div>

          {/* Tab Content Scroll Area */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 scroll-smooth bg-[url('https://www.transparenttextures.com/patterns/cream-dust.png')]">
            <div key={`${currentStep}-${activeTab}`} className="animate-slide-in-right min-h-full">
              
              {/* Image (Only show on History tab to save space on others, or keep consistent? Let's keep it consistent but smaller on others if needed. Actually, removed to focus on text content for tabs) */}
              {/* We can show the image only on the History tab for visual impact */}
              {activeTab === 'history' && currentData.image && (
                <div className="mb-5 rounded-lg overflow-hidden shadow-md border border-stone-200 h-40 md:h-48 relative group">
                  <img src={currentData.image} alt={currentData.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              )}

              {/* CONTENT: HISTORY */}
              {activeTab === 'history' && (
                 <div className="space-y-4">
                    <div className="bg-white/80 p-4 rounded-xl border-l-4 border-amber-500 shadow-sm">
                       <h3 className="flex items-center gap-2 font-bold text-amber-900 mb-2 text-base">
                          事件經過
                       </h3>
                       <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify">
                          {currentData.description}
                       </p>
                    </div>

                    <div className="bg-gradient-to-br from-stone-50 to-stone-100 p-4 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden">
                       <div className="absolute -right-4 -top-4 opacity-[0.05] transform rotate-12">
                          <Star size={80} fill="black" />
                       </div>
                       <h3 className="flex items-center gap-2 font-bold text-red-900 mb-2 text-base relative z-10">
                          歷史意義
                       </h3>
                       <p className="text-stone-600 text-sm md:text-base leading-relaxed text-justify relative z-10">
                          {currentData.significance}
                       </p>
                    </div>
                 </div>
              )}

              {/* CONTENT: FIGURES */}
              {activeTab === 'figures' && (
                 <div className="space-y-4">
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-4">
                       <p className="text-sm text-blue-800 italic flex gap-2">
                          <Info size={16} className="shrink-0"/>
                          歷史是由人民創造的，但英雄人物在關鍵時刻的抉擇往往決定了歷史的走向。
                       </p>
                    </div>
                    {currentData.figures.map((person, idx) => (
                       <div key={idx} className="bg-white p-4 rounded-xl border-l-4 border-blue-500 shadow-sm flex flex-col gap-1">
                          <div className="flex justify-between items-center border-b border-stone-100 pb-2 mb-2">
                             <h3 className="font-bold text-lg text-stone-800">{person.name}</h3>
                             <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{person.role}</span>
                          </div>
                          <p className="text-stone-600 text-sm leading-relaxed text-justify">
                             {person.desc}
                          </p>
                       </div>
                    ))}
                 </div>
              )}

              {/* CONTENT: SURVIVAL */}
              {activeTab === 'survival' && (
                 <div className="space-y-4">
                    <div className="bg-amber-900 text-amber-100 p-5 rounded-xl shadow-lg relative overflow-hidden">
                       <div className="absolute right-0 top-0 opacity-10">
                          <Flame size={100} />
                       </div>
                       <h3 className="font-bold text-xl mb-1 flex items-center gap-2">
                          <Tent size={20} /> {currentData.survival.title}
                       </h3>
                       <div className="w-12 h-1 bg-amber-500/50 mb-4 rounded-full"></div>
                       <p className="text-amber-100/90 text-sm md:text-base leading-relaxed font-serif">
                          {currentData.survival.content}
                       </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm mt-4">
                       <h4 className="font-bold text-stone-700 mb-2 text-sm uppercase tracking-wider">相關數據</h4>
                       <div className="flex items-center gap-3 p-3 bg-stone-100 rounded-lg">
                          <div className="bg-stone-300 p-2 rounded-full text-stone-600">
                             <Info size={20} />
                          </div>
                          <div>
                             <div className="text-xs text-stone-500 font-bold uppercase">{currentData.stat.label}</div>
                             <div className="text-xl font-black text-stone-800 font-mono">{currentData.stat.value}</div>
                          </div>
                       </div>
                    </div>
                 </div>
              )}

            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-3 md:p-4 border-t border-stone-200 bg-stone-50 shrink-0">
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-yellow-950 font-bold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 text-base md:text-lg border-b-4 border-yellow-600"
            >
              <HelpCircle size={20} /> 隨堂知識問答
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <QuizModal 
        quiz={currentData.quiz} 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />

      {/* Intro Modal */}
      {showIntro && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-zoom">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[90vh]">
            <div className="bg-red-900 p-6 text-white flex justify-between items-start shrink-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
              <div>
                <h2 className="text-2xl font-bold mb-1 tracking-wide">歡迎使用長征教學地圖</h2>
                <p className="text-red-100 text-sm font-light">互動式歷史教學輔助工具 - 學生版</p>
              </div>
              <button onClick={() => setShowIntro(false)} className="text-red-300 hover:text-white transition-colors bg-red-950/30 p-1.5 rounded-full hover:bg-red-900/50">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6 overflow-y-auto bg-stone-50">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-red-700 shadow-inner">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-1">歷史事件</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">了解每個重要節點的起因、經過與歷史意義。</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-700 shadow-inner">
                    <Users size={24} />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-1">關鍵人物</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">認識歷史舞台上的英雄人物與決策者。</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-700 shadow-inner">
                    <Tent size={24} />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-1">行軍點滴</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">透過生活細節與數據，體會長征的艱辛與精神。</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm text-yellow-900 flex gap-3 items-start shadow-sm">
                <Info className="shrink-0 mt-0.5 text-yellow-600" size={20} />
                <p>
                  <strong>學習建議：</strong> 不要只關注地圖路線。點擊右側的「人物」和「行軍點滴」分頁，去感受歷史人物在當時的艱難處境與頑強意志。
                </p>
              </div>
            </div>
            
            <div className="p-6 pt-4 bg-white border-t border-stone-200 shrink-0">
              <button 
                onClick={() => setShowIntro(false)}
                className="w-full py-3 bg-red-900 text-white font-bold rounded-xl hover:bg-red-800 transition-all shadow-lg hover:shadow-red-900/20 transform active:scale-[0.98] flex items-center justify-center gap-2"
              >
                開始探索 <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}