import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { 
  Menu, X, Headset, ChevronDown, Building2, Users, Globe,
  Calculator, Scale, Briefcase, TrendingUp, FileSpreadsheet, ShieldCheck,
  BookOpenCheck, Building, Landmark, IndianRupee
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const servicesItems = [
    { name: 'Audit & Assurance', href: '/services#audit-assurance', icon: ShieldCheck },
    { name: 'Taxation Services', href: '/services#taxation', icon: Calculator },
    { name: 'Business Advisory', href: '/services#business-advisory', icon: Briefcase },
    { name: 'Financial Planning', href: '/services#financial-planning', icon: TrendingUp },
    { name: 'Accounting Services', href: '/services#accounting', icon: FileSpreadsheet },
    { name: 'Corporate Law', href: '/services#corporate-law', icon: Scale },
    { name: 'GST Services', href: '/services#gst-services', icon: IndianRupee },
    { name: 'Company Formation', href: '/services#company-formation', icon: Building },
    { name: 'Compliance Management', href: '/services#compliance', icon: BookOpenCheck },
    { name: 'FEMA Services', href: '/services#fema', icon: Landmark },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      dropdown: [
        { name: 'About Firm', href: '/about', icon: Building2 },
        { name: 'Partners', href: '/about#leadership', icon: Users },
        { name: 'Associate Team', href: '/about#associates', icon: Globe },
      ]
    },
    { 
      name: 'Services', 
      multiColumn: true,
      dropdown: servicesItems
    },
    // { 
    //   name: 'Articles', 
    //   href: '/articles'
    // },
    { name: 'Careers', href: '/careers' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-gray-200 dark:border-gray-800 !rounded-none">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 !rounded-none">
        <div className="flex items-center justify-between h-16 !rounded-none">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="logo-text text-xl md:text-2xl font-semibold text-foreground">
              A K Chordia & Associates
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center !rounded-none">
            {navItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const itemHref = item.href ?? '#';
              return (
                <div
                key={item.name}
                className="relative"
                onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {hasDropdown ? (
                  <button
                    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center"
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                    />
                  </button>
                ) : (
                  <Link
                    to={itemHref}
                    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center"
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {hasDropdown && activeDropdown === item.name && (
                  item.multiColumn ? (
                    // Two Column Layout for Services
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[500px] z-50">
                      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 shadow-lg">
                        <div className="grid grid-cols-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary dark:hover:text-primary transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.icon && <dropdownItem.icon size={16} className="mr-3" />}
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Single Column Layout for About & Publications
                    <div className="absolute left-0 top-full pt-3 w-64 z-50">
                      <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 shadow-lg">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary dark:hover:text-primary transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.icon && <dropdownItem.icon size={16} className="mr-3" />}
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
              );
            })}
            <a href="/contact">
              <Button size="sm" className="ml-8 text-sm px-4 py-4 inline-flex items-center" style={{ borderRadius: '4px' }}>
                <Headset className="mr-1.5" size={14} />
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {isMenuOpen ? <X size={0} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 !rounded-none"
            aria-hidden="true"
            onClick={closeMobileMenu}
          />
        )}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 max-w-full transform border-r border-gray-200 bg-white shadow-lg transition-transform duration-300 dark:border-gray-800 dark:bg-[#1a1a1a] !rounded-none ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-gray-800">
            <h2 className="text-base font-semibold text-foreground">Menu</h2>
            <button
              className="p-2 text-gray-600 dark:text-gray-300"
              onClick={closeMobileMenu}
              aria-label="Close navigation"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex h-[calc(100%-64px)] flex-col overflow-y-auto px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const itemHref = item.href ?? '#';
              const isExpanded = activeMobileDropdown === item.name;
              return (
                <div key={item.name}>
                  {hasDropdown ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                        onClick={() =>
                          setActiveMobileDropdown((prev) => (prev === item.name ? null : item.name))
                        }
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="pl-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                              onClick={closeMobileMenu}
                            >
                              {dropdownItem.icon && <dropdownItem.icon size={14} className="mr-2" />}
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={itemHref}
                      className="block px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
            <div className="pt-4">
              <a href="/contact" onClick={closeMobileMenu}>
                <Button
                  size="sm"
                  className="h-9 w-full text-sm"
                  style={{ borderRadius: '4px' }}
                >
                  <Headset className="mr-1.5" size={14} />
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
