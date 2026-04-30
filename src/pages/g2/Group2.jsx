import { useState, useRef, useEffect, useMemo } from "react";
import { historyData } from "./epochsData.js";
import { TYPE_CONFIG } from "./constants.js";
import Legend from "./components/Legend.jsx";
import TimelineCard from "./components/TimelineCard.jsx";
import "./Group2.css";

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function matchesQuery(item, query) {
  if (!query.trim()) return true;

  const trimmed = query.trim();

  // Tag-only mode: query starts with #
  if (trimmed.startsWith("#")) {
    const tagQuery = normalize(trimmed.slice(1));
    if (!tagQuery) return true;
    return (item.tags ?? []).some((tag) => normalize(tag).includes(tagQuery));
  }

  // Normal mode: search everything
  const q = normalize(trimmed);
  const searchableText = [
    item.title.full,
    item.title.short,
    item.time.label,
    item.time.start,
    item.time.end ?? "",
    item.country,
    item.description,
    ...(item.tags ?? []),
    ...(item.categories ?? []),
  ]
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return searchableText.includes(q);
}

export default function Group2() {
  const [openId, setOpenId] = useState(null);
  const [query, setQuery] = useState("");
  const [activeTypes, setActiveTypes] = useState(new Set(["event", "work", "trend"]));
  const [activeCategory, setActiveCategory] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandAll, setExpandAll] = useState(false);
  const cardRefs = useRef({});

  // Scroll listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Extract unique categories from data
  const allCategories = useMemo(() => {
    const cats = new Set();
    historyData.forEach((item) => {
      (item.categories ?? []).forEach((c) => cats.add(c));
    });
    return [...cats].sort();
  }, []);

  // Sort and filter
  const sorted = useMemo(
    () => [...historyData].sort((a, b) => parseInt(a.time.start) - parseInt(b.time.start)),
    []
  );

  const filtered = useMemo(() => {
    return sorted.filter((item) => {
      if (!activeTypes.has(item.type)) return false;
      if (activeCategory && !(item.categories ?? []).includes(activeCategory)) return false;
      return matchesQuery(item, query);
    });
  }, [sorted, activeTypes, activeCategory, query]);

  // Stats
  const stats = useMemo(() => {
    const types = { event: 0, work: 0, trend: 0 };
    const countries = new Set();
    historyData.forEach((item) => {
      types[item.type] = (types[item.type] || 0) + 1;
      if (item.country) countries.add(item.country);
    });
    return { types, countryCount: countries.size, total: historyData.length };
  }, []);

  const toggle = (id) => {
    if (expandAll) setExpandAll(false);
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToItem = (targetId) => {
    const isVisible = filtered.some((item) => item.id === targetId);
    if (!isVisible) {
      setQuery("");
      setActiveTypes(new Set(["event", "work", "trend"]));
      setActiveCategory(null);
    }
    setOpenId(targetId);
    if (expandAll) setExpandAll(false);
    setTimeout(() => {
      const el = cardRefs.current[targetId];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
  };

  const setTagQuery = (tag) => {
    setQuery(`#${tag}`);
    setOpenId(null);
    setExpandAll(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleType = (type) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        if (next.size > 1) next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
    setOpenId(null);
  };

  const handleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(null);
  };

  const isCardOpen = (id) => expandAll || openId === id;

  // Minimap range
  const timeRange = useMemo(() => {
    if (filtered.length === 0) return { min: 0, max: 2025 };
    const starts = filtered.map((i) => parseInt(i.time.start));
    return { min: Math.min(...starts), max: Math.max(...starts) };
  }, [filtered]);

  const fullRange = useMemo(() => {
    const starts = sorted.map((i) => parseInt(i.time.start));
    return { min: Math.min(...starts), max: Math.max(...starts) };
  }, [sorted]);

  return (
    <div className="g2-root">
      <div className="g2-inner">

        {/* Header */}
        <div className="g2-header">
          <div className="g2-header-label">Model infografiki · Grupa 2</div>
          <h1 className="g2-header-title">Oś Przejść</h1>
          <p className="g2-header-subtitle">
            Zmiany postrzegania świata — chronologiczna oś wydarzeń, dzieł i nurtów
          </p>
          <div className="g2-header-line" />
        </div>

        {/* Stats */}
        <div className="g2-stats">
          <div className="g2-stat-chip">
            <span className="stat-icon">📊</span>
            <span className="stat-value">{stats.total}</span> elementów
          </div>
          <div className="g2-stat-chip">
            <span className="stat-icon">⚡</span>
            <span className="stat-value">{stats.types.event}</span> wydarzeń
          </div>
          <div className="g2-stat-chip">
            <span className="stat-icon">📜</span>
            <span className="stat-value">{stats.types.work}</span> dzieł
          </div>
          <div className="g2-stat-chip">
            <span className="stat-icon">〰</span>
            <span className="stat-value">{stats.types.trend}</span> nurtów
          </div>
          <div className="g2-stat-chip">
            <span className="stat-icon">🌍</span>
            <span className="stat-value">{stats.countryCount}</span> regionów
          </div>
        </div>

        {/* Search */}
        <div className="g2-search-wrap">
          <svg className="g2-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            className={`g2-search-input${query.startsWith("#") ? " tag-mode" : ""}`}
            type="text"
            placeholder="Szukaj po nazwie, roku… lub #tag"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpenId(null); setExpandAll(false); }}
          />
          {query && (
            <button className="g2-search-clear" onClick={() => { setQuery(""); setOpenId(null); }}>
              ×
            </button>
          )}
        </div>

        {/* Legend (type filters) */}
        <Legend activeTypes={activeTypes} onToggleType={toggleType} />

        {/* Category Filters */}
        <div className="g2-category-filters">
          <button
            className={`g2-cat-chip${activeCategory === null ? " active" : ""}`}
            onClick={() => { setActiveCategory(null); setOpenId(null); }}
          >
            Wszystkie
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`g2-cat-chip${activeCategory === cat ? " active" : ""}`}
              onClick={() => { setActiveCategory(activeCategory === cat ? null : cat); setOpenId(null); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mini Timeline Map */}
        <div className="g2-minimap">
          <div className="g2-minimap-bar">
            {fullRange.max !== fullRange.min && (
              <div
                className="g2-minimap-fill"
                style={{
                  left: `${((timeRange.min - fullRange.min) / (fullRange.max - fullRange.min)) * 100}%`,
                  width: `${Math.max(2, ((timeRange.max - timeRange.min) / (fullRange.max - fullRange.min)) * 100)}%`,
                }}
              />
            )}
          </div>
          <div className="g2-minimap-labels">
            <span>{fullRange.min < 0 ? `${Math.abs(fullRange.min)} p.n.e.` : fullRange.min}</span>
            <span>{filtered.length} z {historyData.length} widocznych</span>
            <span>{fullRange.max}</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="g2-toolbar">
          <div className="g2-toolbar-left">
            {query.trim() || activeCategory || activeTypes.size < 3 ? (
              <>
                <strong>{filtered.length}</strong> z {historyData.length} elementów
                {query.startsWith("#") ? ` · tag: ${query}` : ""}
              </>
            ) : (
              <>{historyData.length} elementów</>
            )}
          </div>
          <div className="g2-toolbar-btns">
            <button className="g2-btn" onClick={handleExpandAll}>
              {expandAll ? "⊟ Zwiń" : "⊞ Rozwiń"} wszystko
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="g2-timeline">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[item.id] = el)}
                className="g2-card-row"
                style={{ animationDelay: `${Math.min(i * 40, 600)}ms` }}
              >
                <TimelineCard
                  item={item}
                  index={i}
                  isOpen={isCardOpen(item.id)}
                  onToggle={() => toggle(item.id)}
                  allData={historyData}
                  onRelationClick={scrollToItem}
                  onTagClick={setTagQuery}
                />
              </div>
            ))
          ) : (
            <div className="g2-empty">
              <div className="g2-empty-icon">🔍</div>
              Nie znaleziono żadnych elementów
              {query && <> dla „{query}"</>}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="g2-footer">
          {historyData.length} elementów w bazie · dane z baza.js
        </div>
      </div>

      {/* Scroll-to-Top */}
      <button
        className={`g2-scroll-top${showScrollTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Wróć na górę"
      >
        ↑
      </button>
    </div>
  );
}
