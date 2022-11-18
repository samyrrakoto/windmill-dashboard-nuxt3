import kebabCase from 'just-kebab-case';

export default defineNuxtPlugin(nuxtApp => (
    {
        provide: {
            utils: {
                stringUtils: {
                    toUcFirst(text: String): string {
                        return text.charAt(0).toUpperCase() + text.slice(1)
                    },
                    toKebabCase(menuElement: string): string {
                        return kebabCase(menuElement)
                    }
                }
            }
        }
    })
)