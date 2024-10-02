'use client';

export function PublicDocument() {
  
  

  return (
    <section className='bg-[#E3E3E3] py-32 '>
      <div className='mx-auto w-[min(1140px,90%)]'>
        <h2 className='mx-auto mb-20 max-w-[570px] bg-[#09007c] py-4 text-center text-4xl uppercase tracking-widest text-white sm:text-5xl'>
          Public Document
        </h2>

        <p>Click on the pdf logo to download the whitepaper:</p>
                  
                  <a href="/contact-us/whitepaper.pdf" download>
                    <img src="/contact-us/pdf.png" width="120" height="120"/>
                  </a>
                  
                  <p><b>Note:</b> The download attribute is not supported in Edge version 12, IE, Safari 10 (and earlier), or Opera version 12 (and earlier).</p>

      </div>
    </section>
  );
}
