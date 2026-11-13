// Global Application State Store
const SOCStore = {
    registeredUser: null,
    attackTypes: [
        { type: "Cross-Site Scripting (XSS)", severity: "MEDIUM" },
        { type: "DDoS Traffic Spike", severity: "CRITICAL" },
        { type: "SSH Brute-Force", severity: "HIGH" }
    ],
    ips: ["198.51.100.160", "172.56.91.47", "45.142.120.8"]
};