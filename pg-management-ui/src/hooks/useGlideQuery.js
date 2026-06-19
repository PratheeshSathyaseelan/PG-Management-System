import { useState, useEffect } from "react";
import { queryGlideData } from "../services/glideApi";

/**
 * Custom hook to fetch data from Glide
 * @param {string} query - SQL query to execute
 * @param {boolean} autoFetch - Whether to automatically fetch on mount
 * @returns {Object} - { data, loading, error, refetch }
 */
export const useGlideQuery = (query, autoFetch = true) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await queryGlideData(query);
      setData(result || []);
    } catch (err) {
      setError(err.message);
      console.error("Glide Query Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch && query) {
      refetch();
    }
  }, [query, autoFetch]);

  return { data, loading, error, refetch };
};

export default useGlideQuery;
