import { cubicInOut } from "svelte/easing";

export function fadeScale(node: Node, { duration = 150, easing = cubicInOut }) {
    return {
        duration,
        css: (t: number) => {
            const eased = easing(t);

            return `
                transform: scale(${eased});
                opacity: ${eased};
            `
        }
    }
}