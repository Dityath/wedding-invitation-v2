import Image from "next/image";
import Love from "./love";
import Countdown from "react-countdown";

const Undangan = () => {

  const theDate = new Date(2021, 10, 25)

  const renderer = ({ formatted: { days, hours, minutes, seconds } }) => {
    return (
      <div className="undangan-first">
        <div className="date">
          <h3>{days}</h3>
          <p>Hari</p>
        </div>
        <div className="divider">:</div>
        <div className="date">
          <h3>{hours}</h3>
          <p>Jam</p>
        </div>
        <div className="divider">:</div>
        <div className="date">
          <h3>{minutes}</h3>
          <p>Menit</p>
        </div>
        <div className="divider">:</div>
        <div className="date">
          <h3>{seconds}</h3>
          <p>Detik</p>
        </div>
      </div>
    )
  }

  return (
    <section className="undangan">
      <Countdown date={theDate} renderer={renderer} />
      <div className="undangan-second">
        <p>Seraya menengadahkan jemari bermunajat dalam hamparan kasih ilahi yang terbentang Teriring Asma Allah SWT yang maha pengasih lagi maha penyayang kami menyatukan langkah mendorong putra-putri kami.  Untuk mengikuti Sunnah Rasulullah SAW membentuk keluarga Sakinah Mawadah Warahmah dengan harapan memperoleh keturunan yang Sholeh dan Sholihah.</p>
      </div>
      <div className="undangan-third">
        <div className="mempelai">
          <div className="photo">
            <Image
              src='/undangan/FotoGadis.png'
              layout='fill'
            />
          </div>
          <h3>Putri Aisyah Cantiqa</h3>
          <p>Putri dari Bapak Kusumo <br /> dan Ibu Lucian</p>
        </div>
        <Love />
        <div className="mempelai">
          <div className="photo">
            <Image
              src='/undangan/FotoPria.png'
              layout='fill'
            />
          </div>
          <h3>Lukman Cahya Utama</h3>
          <p>Putra dari Bapak Harsono <br /> dan Ibu Suharyati</p>
        </div>
      </div>
    </section>
  )
}

export default Undangan;