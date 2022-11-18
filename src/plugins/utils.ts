import kebabCase from 'just-kebab-case';

export default defineNuxtPlugin(nuxtApp => (
    {
        provide: {
            utils: {
                stringUtils: {
                    toUcFirst(text: string): string {
                        return text.charAt(0).toUpperCase() + text.slice(1)
                    },
                    toKebabCase(text: string): string {
                        return kebabCase(text)
                    }
                }
            }
        }
    })
)