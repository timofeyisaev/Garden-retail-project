import React from 'react';
import s from './style.module.css';

export default function AddressBlock() {
  return (
    <div>
        <div className={s.addressContainer}>
            <div className={s.leftBlock}>
                <p className={s.leftBlockContact}>Contact</p>
                <p className={s.leftBlockPhone}>+49 999 999 99 99</p>
                <div className={s.iconsContainer}>
                    <div className={s.instagramBlock}>
                        <div className={s.instagramIcon}></div>
                        <p>Instagram</p>
                    </div>
                    <div className={s.whatsAppBlock}>
                        <div className={s.whatsAppIcon}></div>
                        <p>WhatsApp</p>
                    </div>
               
                </div>
            </div>
            <div className={s.rightBlock}>
                <p className={s.rightBlockInscr}>Address</p>
                <p className={s.rightBlockAddress}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                <p className={s.workingHours}>Working Hours:</p>
                <p className={s.workingHours2}>24 hours a day</p>
            </div>
        </div>
        
        <iframe className={s.map}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.410459266542!2d13.375101599999999!3d52.5079105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2zTGlua3N0cmHDn2UgMi84LiBFdGFnZSwgMTA3ODUgQmVybGluLCDQk9C10YDQvNCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1678355730602!5m2!1sru!2sru" title='map' ></iframe>
        
    </div>
  )
}
