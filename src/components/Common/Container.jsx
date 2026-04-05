export default function Container({ children, className = '' }) {
     return (
          <div className={`max-w-7xl mx-auto section-padding ${className}`}>
               {children}
          </div>
     );
}
