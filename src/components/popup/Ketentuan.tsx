import { assets } from "../../assets/assets";
import { IoCloseSharp } from "react-icons/io5";
import { useBackBlur } from "../../context/BackdropProvider";

const Ketentuan = () => {
  const { toggleDeactive } = useBackBlur();

  const handleClick = () => {
    toggleDeactive();
  };
  return (
    <div className="term w-full  mx-auto  max-w-[30rem] h-[40rem] py-8 pt-10 px-6 bg-white  rounded-md text-black relative">
      <button onClick={handleClick} className="absolute top-4 right-4 text-2xl">
        <IoCloseSharp />
      </button>
      <div className="overflow-scroll adv w-full h-[33rem] border-b-[1px] border-black">
        <div className="logo mx-auto w-[8rem]">
          <img src={assets.icons.logoDark} alt="" />
        </div>
        <div className="describ text-sm">
          <h2 className="text-xl font-bold mb-2">Ketentuan Anggota</h2>
          <p className="text-sm  mb-4">
            Selamat datang di RTIB! Sebelum bergabung dengan kami, pastikan kamu
            telah membaca dan memahami ketentuan berikut:
          </p>
          <h3 className="text-base font-bold"> 1. Syarat Keanggotaan</h3>
          <ul className="list-disc px-8 mb-4">
            <li>Member server discord Repoublic Of TIB.</li>
            <li>Memiliki Role setidaknya Prajurit.</li>
            <li>Aktif eksplorasi teknologi.</li>
            <li>
              Memiliki Ketertaikan tinggi terhadap bidang Tim-RTIB yang Dipilih.
            </li>
          </ul>
          <h3 className="text-base font-bold"> 2. Hak & Kewajiban</h3>
          <ul className="list-disc px-8 mb-4">
            <li>
              <span className="font-bold">Kewajiban: </span>Setidaknya kamu
              harus mengumpulkan 1 projek hasil ekplorasi setiap Bulan-nya.
            </li>
            <li>
              <span className="font-bold">Hak: </span> Kamu berhak mendapatkan
              pengetahuan dan pengalaman baru dari Kami.
            </li>
          </ul>
          <h3 className="text-base font-bold"> 3. Keamanan & Privasi</h3>
          <ul className="list-disc px-8 mb-4">
            <li>
              Data yang kamu berikan akan digunakan sesuai dengan kebijakan
              privasi kami.
            </li>
            <li>
              Seluruh data repositori projek yang kamu berikan digunakan sebagai
              edukasi Tim-RTIB.
            </li>
          </ul>
          <h3 className="text-base font-bold"> 4. Pelanggaran & Sanksi</h3>
          <ul className="list-disc px-8 mb-4">
            <li>
              <span className="font-bold">1 Kali Tidak Kirim Projek: </span>
              Peringatan Ringan akan dikirim ke Email-Mu.
            </li>
            <li>
              <span className="font-bold">2 Kali Tidak Kirim Projek: </span>
              Pemberhentian Akses ke Repository RTIB dan Akses role Discord
              selama 1 Bulan.
            </li>
            <li>
              <span className="font-bold">3 Kali Tidak Kirim Projek: </span>
              Pemberhentian Anggota Permanent.
            </li>
          </ul>
          <h3 className="text-base font-bold"> 5. Perubahan Ketentuan</h3>
          <p className="px-5 mb-6">
            Kami dapat memperbarui ketentuan ini sewaktu-waktu, dan kamu setuju
            untuk selalu mengikuti perubahan yang ada.
          </p>
          <p>
            <span className="font-bold">NOTE: </span>Kami bukanlah komunitas
            maupun Tim Formal jadi Tidak Akan Memberimu uang dengan bergabung
            kami. <span className="font-bold">Kecuali </span>jika kamu menjalin
            kerjasama dengan kami di bidang tertentu ataupun kami ingin menjalin
            kerja sama dalam hal tertentu dengan-Mu.
          </p>
        </div>
      </div>
      <form action="" className="pt-3">
        <div className="inputgrub flex items-center gap-4">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-neutral"
            id="myterm"
          />
          <label htmlFor="myterm " className="text-sm">
            Dengan bergabung, kamu menyetujui seluruh ketentuan ini.
          </label>
        </div>
      </form>
    </div>
  );
};

export default Ketentuan;
