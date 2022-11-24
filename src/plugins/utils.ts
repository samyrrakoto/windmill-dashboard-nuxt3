import kebabCase from 'just-kebab-case';

export default defineNuxtPlugin(nuxtApp => (
    {
        provide: {
            utils: {
                globals: {
                    projectName: 'Windmill Dashboard - Nuxt3',
                },
                stringUtils: {
                    toUcFirst(text: string): string {
                        return text.charAt(0).toUpperCase() + text.slice(1)
                    },
                    toKebabCase(text: string): string {
                        return kebabCase(text)
                    },
                    lipsum(): string {
                        return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione"
                    }
                }
            }
        }
    })
)