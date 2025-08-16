import { get } from "@vercel/edge-config"

// Check if Edge Config is available
function isEdgeConfigAvailable(): boolean {
  return !!process.env.EDGE_CONFIG
}

// Edge Config helper functions
export async function getConfig(key: string) {
  if (!isEdgeConfigAvailable()) {
    console.warn("Edge Config not configured - using fallback values")
    return null
  }

  try {
    return await get(key)
  } catch (error) {
    console.error("Error fetching from Edge Config:", error)
    return null
  }
}

export async function getGreeting() {
  const fallbackGreeting = "Welcome to LunaLuxe Fashion"

  if (!isEdgeConfigAvailable()) {
    return fallbackGreeting
  }

  try {
    const greeting = await get("greeting")
    return greeting || fallbackGreeting
  } catch (error) {
    console.error("Error fetching greeting:", error)
    return fallbackGreeting
  }
}

export async function getSiteConfig() {
  const fallbackConfig = {
    maintenance_mode: false,
    featured_categories: ["mens-fashion", "womens-fashion", "african-designs", "footwear"],
    special_offers: [],
    announcement_banner: {
      message: "🎉 New African Collection - Free Shipping Over KSh 3,000!",
      type: "info" as const,
      dismissible: true,
      link: "/shop",
      linkText: "Shop Now",
    },
    shipping_rates: {
      standard: 200,
      express: 500,
      overnight: 1000,
    },
  }

  if (!isEdgeConfigAvailable()) {
    return fallbackConfig
  }

  try {
    const config = await get("siteConfig")
    return config || fallbackConfig
  } catch (error) {
    console.error("Error fetching site config:", error)
    return fallbackConfig
  }
}

export async function getProductConfig() {
  const fallbackConfig = {
    max_discount: 50,
    trending_threshold: 100,
    low_stock_threshold: 10,
    featured_products: [],
  }

  if (!isEdgeConfigAvailable()) {
    return fallbackConfig
  }

  try {
    const config = await get("product_config")
    return config || fallbackConfig
  } catch (error) {
    console.error("Error fetching product config:", error)
    return fallbackConfig
  }
}
