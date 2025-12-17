import React from 'react';
import AnimatedLink from '../animateComponents/AnimatedLink';
import { MapPin } from 'lucide-react';
import Wrapper from '../Wrapper';
import { Link } from 'react-router-dom';

const Footer =
() => {
  const footerData =
  {
    Services:
    [
            {
              title:
                'Zoho Development',
              link: '/services/zoho-development',
            },
            {
              title:
                'Web Development',
              link: '/services/web-development',
            },
            {
              title:
                'Artificial Intelligence',
              link: '/services/ai-development',
            },
            {
              title:
                'ERP Solutions',
              link: '/services/erp-solutions',
            },
            {
              title:
                'E-Commerce Development',
              link: '/services/e-commerce-development',
            },
            {
              title:
                'Mobile Development',
              link: '/services/mobile-development',
            },
            {
              title:
                'IT Consulting Services',
              link: '/services/it-consulting-services',
            },
            {
              title:
                'Offshore Development Team',
              link: '/services/offshore-development-team',
            },
          ],
        Industries:
          [
            {
              title:
                'Healthcare',
              link: '/industries/healthcare',
            },
            {
              title:
                'Finance',
              link: '/industries/finance-banking',
            },
            {
              title:
                'Ecommerce',
              link: '/industries/ecommerce',
            },
            {
              title:
                'Real Estate',
              link: '/industries/real-estate',
            },
            {
              title:
                'Manufacturing',
              link: '/industries/manufacturing',
            },
            {
              title:
                'Education',
              link: '/industries/education',
            },
          ],

        Company:
          [
            {
              title:
                'About Us',
              link: '/about',
            },
            {
              title:
                'Contact Us',
              link: '/contact',
            },
          ],
      };

    return (
      <footer
        // className="bg-[#F9FAFB]"
        className="bg-primary-950 relative"
      >
        <Wrapper
          className={
            'grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 overflow-hidden p-5 py-10 text-white'
          }
        >
          {/* services */}
          {Object.keys(
            footerData,
          ).map(
            (
              data,
              index,
            ) => {
              return (
                <div
                  className={`${index !== Object.keys(footerData).length ? 'sm:border-r' : ''} py-3`}
                  key={
                    index
                  }
                >
                  <div className="w-max space-y-2 text-start sm:mx-auto">
                    <h3 className="text-lg font-semibold uppercase">
                      <Link
                        to={
                          data ===
                          'Company'
                            ? '/about'
                            : `/${data.toLowerCase()}`
                        }
                      >
                        {
                          data
                        }
                      </Link>
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {footerData[
                        data
                      ].map(
                        (
                          service,
                          serviceIndex,
                        ) => {
                          return (
                            <AnimatedLink
                              key={
                                serviceIndex
                              }
                              {...service}
                            />
                          );
                        },
                      )}
                    </ul>
                  </div>
                </div>
              );
            },
          )}

          {/* Contact */}
          <div>
            <div className="w-full max-w-max space-y-3 text-start sm:mx-auto">
              <h3 className="text-xl font-medium uppercase">
                Addresses
              </h3>
              <div className="flex w-full items-start gap-2">
                <MapPin
                  size={
                    30
                  }
                />
                <p className="max-w-64 text-wrap">
                  8th
                  Floor,
                  Plot
                  No.
                  16,
                  Sector
                  22,
                  IT
                  Park,
                  Panchkula,
                  Haryana
                  –
                  134116
                </p>
              </div>

              <div className="flex w-full items-start gap-2">
                <MapPin
                  size={
                    30
                  }
                />
                <p className="max-w-64 text-wrap">
                  #B-1107,
                  Tower
                  T4
                  (11th
                  Floor)
                  Plot
                  No.
                  17,
                  Tech
                  Zone
                  IV,
                  Greater
                  Noida
                  West,Uttar
                  Pradesh
                  –
                  201301
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
        <span className='absolute bottom-2 left-2 text-xs text-white'>© 2025 WeboAppDiscovery Pvt Ltd. All rights reserved.</span>
      </footer>
    );
  };

export default Footer;
