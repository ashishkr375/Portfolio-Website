import { clientReviews } from '../constants/index.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="c-space my-20" id="clients">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h3 className="head-text text-center mb-4">Hear from My Clients</h3>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Trusted by businesses and organizations to deliver exceptional digital solutions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {clientReviews.map((item, index) => (
          <motion.div
            key={`review-${item.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative"
          >
            {/* Card with gradient border effect */}
            <div className="relative bg-black-200 rounded-2xl p-8 border border-black-300 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-500/20 text-6xl font-serif leading-none">
                "
              </div>

              {/* Review Text */}
              <p className="text-white-800 text-base leading-relaxed mb-6 relative z-10 flex-grow">
                {item.review}
              </p>

              {/* Tech Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white-500/20 to-transparent mb-6" />

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={item.img} 
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/30 group-hover:ring-blue-500/50 transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black-200" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.position}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
