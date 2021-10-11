const Pesan = () => {
  return (
    <section className="pesan">
      <h1>Pesan Untuk Pasangan</h1>
      <div className="pesan-container">
        <h3>Pesan (12)</h3>
        <hr />
        <form>
          <input type="text" name="nama" placeholder="Nama Anda" />
          <textarea name="pesan" placeholder="Pesan Anda" />
          <button type="submit">Kirim</button>
          <div className="comment-box">

          </div>
        </form>
      </div>
    </section>
  )
};

export default Pesan;