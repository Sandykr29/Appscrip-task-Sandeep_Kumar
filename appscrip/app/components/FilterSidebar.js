
import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const sections = [
  'idealFor',
  'occasion',
  'work',
  'fabric',
  'segment',
  'suitableFor',
  'rawMaterials',
  'pattern',
];

const options = {
  idealFor: ['All', 'Men', 'Women', 'Kids'],
  occasion: ['All'],
  work: ['All'],
  fabric: ['All'],
  segment: ['All'],
  suitableFor: ['All'],
  rawMaterials: ['All'],
  pattern: ['All'],
};

const FilterSidebar = ({ filters, setFilters, showFilters = true }) => {
  const [expanded, setExpanded] = useState(() => {
    const initial = {};
    sections.forEach((key) => (initial[key] = true));
    return initial;
  });

  const toggleSection = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const handleOptionChange = (section, option) => {
    setFilters((prev) => {
      const current = prev[section] || [];
      let updated;

      if (option === 'All') {
        updated = ['All']; // Reset to only "All"
      } else {
        if (current.includes(option)) {
          updated = current.filter((item) => item !== option);
        } else {
          updated = [...current.filter((o) => o !== 'All'), option]; // remove "All" when selecting others
        }
      }

      return { ...prev, [section]: updated };
    });
  };

  if (!showFilters) return null;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filterSection}>
        <label>
          <input
            type="checkbox"
            name="customizable"
            checked={filters.customizable || false}
            onChange={handleCheckboxChange}
          />
          <strong>&nbsp;&nbsp;CUSTOMIZABLE</strong>
        </label>
      </div>

      <div className={styles.filterSection}>
        <h3>Category</h3>
        {['electronics', 'jewelery', "men's clothing", "women's clothing"].map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              name={cat}
              checked={filters[cat] || false}
              onChange={handleCheckboxChange}
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
        ))}
      </div>

      {sections.map((key) => (
        <div key={key} className={styles.filterSection}>
          <div
            className={styles.filterTitle}
            onClick={() => toggleSection(key)}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
          >
            <span>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
            {expanded[key] ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </div>

          {expanded[key] && (
            <div className={styles.filterOptions}>
              {options[key].map((opt) => (
                <div key={opt} className={styles.fakeLabel}>
                  {opt === 'Kids' ? 'Baby & Kids' : opt}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
