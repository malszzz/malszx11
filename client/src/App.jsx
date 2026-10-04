import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Menu, User, Settings, Rocket, MessageCircle, Music, Lock, Home, Wrench, Send, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

// Ambil URL API dari .env
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// --- KOMPONEN SIDEBAR ---
const Sidebar = ({ isOpen, toggleSidebar, onAdminLogin }) => {
  return (
    <div className={`fixed inset-0 z-50 flex ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay Gelap */}
      <div 
        className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleSidebar}
      ></div>
      
      {/* Drawer Sidebar */}
      <div className={`relative w-64 bg-malszx-dark text-white h-full p-6 flex flex-col gap-6 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h2 className="text-2xl font-black text-malszx-matrix uppercase border-b-4 border-malszx-matrix pb-2">Malszx Menu</h2>
        
        <div className="flex flex-col gap-4 font-mono font-bold">
          <Link to="/" onClick={toggleSidebar} className="flex items-center gap-3 hover:text-malszx-matrix transition-colors">
            <Home size={20} /> TENTANG
          </Link>
          <a href="https://chat.whatsapp.com/C7Vl09kqFhDHX0th7A32J3" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-malszx-matrix transition-colors">
            <MessageCircle size={20} /> GRUP WHATSAPP
          </a>
          <a href="https://tiktok.com/@bos_karung" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-malszx-matrix transition-colors">
            <Music size={20} /> TIKTOK (@bos_karung)
          </a>
        </div>

        <div className="mt-auto border-t-2 border-gray-600 pt-4">
          <button 
            onClick={onAdminLogin}
            className="w-full bg-malszx-header text-malszx-matrix border-2 border-malszx-matrix p-2 rounded font-mono font-bold hover:bg-malszx-matrix hover:text-black transition-all flex justify-center items-center gap-2"
          >
            <Lock size={16} /> ADMIN LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

// --- HALAMAN HOME ---
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Header Card */}
      <div className="bg-malszx-header text-white p-6 rounded-2xl border-4 border-black shadow-brutal relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-black tracking-wider uppercase mb-2">XY PLUGINZ</h1>
          <span className="bg-malszx-orange text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-black">
            POWERED BY @XCY
          </span>
        </div>
        {/* Hiasan Matrix */}
        <div className="absolute top-0 right-0 opacity-20 text-malszx-matrix font-mono text-xs leading-none">
          01001101<br/>01100001<br/>01101100<br/>01110011<br/>01111010<br/>01111000
        </div>
      </div>

      {/* User Stats Card */}
      <div className="bg-malszx-card p-4 rounded-2xl border-4 border-black shadow-brutal">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-malszx-orange rounded-full border-4 border-black flex items-center justify-center text-2xl">
            👾
          </div>
          <div>
            <p className="text-sm font-bold text-gray-500">Welcome Back!</p>
            <h2 className="text-xl font-black flex items-center gap-2">
              MALSZ <CheckCircle size={16} className="text-blue-500" />
            </h2>
            <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded">MEMBER</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 border-2 border-black rounded-xl p-3 bg-white">
          <div className="text-center border-r-2 border-black">
            <div className="text-green-500 flex justify-center"><Send size={16}/></div>
            <p className="font-black text-lg">0</p>
            <p className="text-[10px] font-bold">SENDER ONLINE</p>
          </div>
          <div className="text-center border-r-2 border-black">
            <div className="text-red-500 flex justify-center"><XCircle size={16}/></div>
            <p className="font-black text-lg">0</p>
            <p className="text-[10px] font-bold">SENDER OFFLINE</p>
          </div>
          <div className="text-center">
            <div className="text-black flex justify-center"><Settings size={16}/></div>
            <p className="font-black text-sm">2026-11-03</p>
            <p className="text-[10px] font-bold">EXPIRED</p>
          </div>
        </div>
      </div>

      {/* Tombol Navigasi Utama */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => navigate('/amprem')}
          className="bg-malszx-orange p-6 rounded-2xl border-4 border-black shadow-brutal hover:translate-y-1 hover:shadow-brutal-hover transition-all flex flex-col items-start gap-2"
        >
          <Settings size={28} />
          <span className="font-black text-lg text-left leading-tight">AM PREMIUM<br/><span className="text-xs font-bold bg-black text-white px-2 py-0.5 rounded mt-1 inline-block">AKSES FITUR</span></span>
        </button>

        <button className="bg-malszx-red p-6 rounded-2xl border-4 border-black shadow-brutal hover:translate-y-1 hover:shadow-brutal-hover transition-all flex flex-col items-start gap-2 text-white">
          <Rocket size={28} />
          <span className="font-black text-lg text-left leading-tight">CRASH VAULT<br/><span className="text-xs font-bold bg-black text-white px-2 py-0.5 rounded mt-1 inline-block">COMING SOON</span></span>
        </button>
      </div>

      {/* Status Server */}
      <div className="bg-malszx-card p-4 rounded-2xl border-4 border-black shadow-brutal flex justify-between items-center">
        <div className="flex items-center gap-2 font-black">
          <Settings size={20} /> STATUS SERVER
        </div>
        <span className="bg-malszx-red text-white font-bold px-4 py-1 rounded-full border-2 border-black flex items-center gap-1">
          <XCircle size={14}/> OFFLINE
        </span>
      </div>
    </div>
  );
};

// --- HALAMAN AM PREMIUM ---
const AmPremiumPage = () => {
  const [email, setEmail] = useState('');
  const [rawLink, setRawLink] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      // Menggunakan API_BASE_URL dari .env
      const res = await axios.post(`${API_BASE_URL}/api/amprem`, { email, rawLink });
      if (res.data.success) {
        if (res.data.step === 1) {
          setStep(2);
          setMessage(res.data.message);
        } else {
          setMessage(res.data.message);
          setStep(3); // Sukses total
        }
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Terjadi kesalahan sistem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-6">
      <Link to="/" className="font-black text-sm bg-white border-2 border-black px-4 py-2 rounded-xl shadow-brutal w-fit hover:translate-y-1 hover:shadow-brutal-hover transition-all">
        ← KEMBALI
      </Link>
      
      <div className="bg-white p-6 rounded-2xl border-4 border-black shadow-brutal">
        <h1 className="text-2xl font-black mb-4 uppercase text-center border-b-4 border-black pb-2">ALIGHT MOTION PREMIUM</h1>
        
        {message && (
          <div className={`p-4 mb-4 border-2 border-black rounded-xl font-bold text-sm ${step === 3 ? 'bg-malszx-matrix' : 'bg-yellow-200'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono font-bold">
          <div>
            <label className="block mb-1 text-sm">EMAIL ALIGHT MOTION</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contoh@gmail.com"
              required
              disabled={step === 2 || step === 3}
              className="w-full border-2 border-black p-3 rounded-xl font-bold focus:outline-none focus:border-malszx-matrix disabled:bg-gray-200"
            />
          </div>

          {step === 2 && (
            <div>
              <label className="block mb-1 text-sm">RAW MAGIC LINK (CEK EMAIL)</label>
              <textarea 
                value={rawLink}
                onChange={(e) => setRawLink(e.target.value)}
                placeholder="Paste link verifikasi dari email di sini..."
                required
                rows="3"
                className="w-full border-2 border-black p-3 rounded-xl font-bold focus:outline-none focus:border-malszx-matrix"
              ></textarea>
            </div>
          )}

          {step < 3 && (
            <button 
              type="submit" 
              disabled={loading}
              className="bg-malszx-orange border-4 border-black p-4 rounded-xl font-black text-lg shadow-brutal hover:translate-y-1 hover:shadow-brutal-hover transition-all disabled:opacity-50"
            >
              {loading ? 'MEMPROSES...' : step === 1 ? 'KIRIM MAGIC LINK' : 'VERIFIKASI & AMBIL PREMIUM'}
            </button>
          )}
        </form>
      </div>
      
      <div className="bg-malszx-dark text-malszx-matrix p-4 rounded-2xl border-4 border-black shadow-brutal font-mono text-xs">
        <p>&gt; SYSTEM NOTE:</p>
        <p>&gt; Limit penggunaan fitur ini adalah 1x24 Jam.</p>
        <p>&gt; Harap gunakan dengan bijak.</p>
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA ---
export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState('');
  const [adminMessage, setAdminMessage] = useState('');

  const handleAdminLogin = async () => {
    try {
      // Menggunakan API_BASE_URL dari .env
      const res = await axios.post(`${API_BASE_URL}/api/admin/login`, { pin });
      if (res.data.success) {
        setIsAdmin(true);
        setShowPinModal(false);
        setPin('');
        setAdminMessage('Login Berhasil! Mode Admin Aktif.');
      }
    } catch (error) {
      setAdminMessage(error.response?.data?.message || 'PIN Salah!');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-malszx-bg font-mono relative overflow-x-hidden">
        
        {/* Efek Background Matrix Halus */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] text-black text-[10px] leading-none overflow-hidden z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="absolute" style={{ left: `${i * 2}%`, top: `-${Math.random() * 100}%` }}>
              {Array.from({ length: 100 }).map((_, j) => <div key={j}>1<br/>0<br/></div>)}
            </div>
          ))}
        </div>

        {/* Header */}
        <header className="bg-malszx-bg border-b-4 border-black p-4 flex justify-between items-center sticky top-0 z-40">
          <button onClick={() => setSidebarOpen(true)} className="bg-white border-2 border-black p-2 rounded-lg shadow-brutal active:translate-y-0.5 active:shadow-none">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-black tracking-widest uppercase">MALSZX</h1>
          <button className="bg-white border-2 border-black p-2 rounded-full shadow-brutal active:translate-y-0.5 active:shadow-none">
            <User size={24} />
          </button>
        </header>

        {/* Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggleSidebar={() => setSidebarOpen(false)} 
          onAdminLogin={() => { setSidebarOpen(false); setShowPinModal(true); }}
        />

        {/* Modal Login Admin */}
        {showPinModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-brutal w-full max-w-sm">
              <h2 className="text-xl font-black mb-4 text-center">ADMIN ACCESS</h2>
              {adminMessage && <p className="text-red-500 font-bold text-sm mb-2 text-center">{adminMessage}</p>}
              <input 
                type="password" 
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Masukkan Kombinasi Angka..."
                className="w-full border-2 border-black p-3 rounded-xl font-bold mb-4 focus:outline-none focus:border-malszx-matrix text-center tracking-widest"
              />
              <div className="flex gap-2">
                <button onClick={() => { setShowPinModal(false); setPin(''); setAdminMessage(''); }} className="flex-1 bg-gray-300 border-2 border-black p-2 rounded-xl font-bold">BATAL</button>
                <button onClick={handleAdminLogin} className="flex-1 bg-malszx-matrix border-2 border-black p-2 rounded-xl font-bold">MASUK</button>
              </div>
            </div>
          </div>
        )}

        {/* Admin Panel (Jika Login) */}
        {isAdmin && (
          <div className="fixed top-20 right-4 z-50 bg-black text-malszx-matrix p-4 border-4 border-malszx-matrix rounded-xl font-mono text-sm shadow-brutal">
            <p className="font-bold mb-2 border-b border-malszx-matrix pb-1">ADMIN PANEL</p>
            <button className="block w-full text-left hover:bg-malszx-matrix hover:text-black px-2 py-1 rounded">🛠️ Maintenance Web</button>
            <button className="block w-full text-left hover:bg-malszx-matrix hover:text-black px-2 py-1 rounded">🔄 Update Server</button>
            <button onClick={() => setIsAdmin(false)} className="block w-full text-left text-red-400 hover:bg-red-500 hover:text-white px-2 py-1 rounded mt-2">🚪 Logout</button>
          </div>
        )}

        {/* Main Content */}
        <main className="relative z-10 max-w-md mx-auto pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/amprem" element={<AmPremiumPage />} />
          </Routes>
        </main>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-0 right-0 bg-malszx-bg border-t-4 border-black p-3 flex justify-around items-center z-40 max-w-md mx-auto">
          <Link to="/" className="flex flex-col items-center text-black hover:text-malszx-orange">
            <Home size={24} />
            <span className="text-[10px] font-black mt-1">HOME</span>
          </Link>
          <a href="#" className="flex flex-col items-center text-black hover:text-malszx-orange">
            <MessageCircle size={24} />
            <span className="text-[10px] font-black mt-1">WHATSAPP</span>
          </a>
          <a href="#" className="flex flex-col items-center text-black hover:text-malszx-orange">
            <MessageCircle size={24} />
            <span className="text-[10px] font-black mt-1">CHAT</span>
          </a>
          <a href="#" className="flex flex-col items-center text-black hover:text-malszx-orange">
            <Settings size={24} />
            <span className="text-[10px] font-black mt-1">KONTROL</span>
          </a>
          <a href="#" className="flex flex-col items-center text-black hover:text-malszx-orange">
            <Wrench size={24} />
            <span className="text-[10px] font-black mt-1">TOOLS</span>
          </a>
        </div>

      </div>
    </Router>
  );
}
