import partner1 from '../assets/images/logo china-datang-corporation.png'
import partner2 from '../assets/images/logo-energy-china.png'
import partner3 from '../assets/images/logo-ega.png'
import partner4 from '../assets/images/logo-ADNOC.png'
import partner5 from '../assets/images/logo-east-hope.png'
import partner6 from '../assets/images/logo-rp-sanjiv-goenka-group.png'
import partner7 from '../assets/images/logo-china-huadian.png'
import partner8 from '../assets/images/logo-china-communications-construction.png'
import partner9 from '../assets/images/logo-ITW.png'
import partner10 from '../assets/images/logo-essar.png'
import partner11 from '../assets/images/logo-china-jinjiang.png'
import partner12 from '../assets/images/logo-avalon.png'


const PARTNER_LOGOS = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12]

export default function Partners() {
    const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
    return <section className="partners section-pad" aria-label="Our Trusted Partners & Clients">
        <div className="container">
            <div className="label">Our trusted Partners &amp; Clients</div>

            <div className="partners-marquee" aria-hidden="true">
                <div className="partners-track">
                    {logos.map((logo, index) => <div className="partner-logo" key={`${logo}-${index}`}><img src={logo}
                                                                                                            alt=""/></div>)}
                </div>
            </div>
        </div>
    </section>
}


