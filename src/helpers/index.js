export function getDiffyear(year) {
    return new Date().getFullYear() - year;
}

export function handleBrand(brand) {
    let inc;

    switch (brand) {
        case "1":
            inc = 1.3
            break;
        case "2":
            inc = 1.15
            break;
        case "3":
            inc = 1.05
            break;
        default:
            break;
    }
    return inc;
}

export function handlePlan(plan) {
    return plan === "1" ? 1.2 : 1.5
}

export function formatMoney(qty) {
    return qty.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP"
    })
}