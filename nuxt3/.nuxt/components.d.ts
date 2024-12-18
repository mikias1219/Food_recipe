
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'CreateRecipes': typeof import("../components/CreateRecipes.vue")['default']
    'Delete': typeof import("../components/Delete.vue")['default']
    'Edit': typeof import("../components/Edit.vue")['default']
    'FetchUser': typeof import("../components/FetchUser.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'Logout': typeof import("../components/Logout.vue")['default']
    'RecipeCard': typeof import("../components/RecipeCard.vue")['default']
    'RecipeInsert': typeof import("../components/RecipeInsert.vue")['default']
    'Recipes': typeof import("../components/Recipes.vue")['default']
    'UploadImage': typeof import("../components/UploadImage.vue")['default']
    'Custom': typeof import("../components/custom.vue")['default']
    'Fetch': typeof import("../components/fetch.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCreateRecipes': typeof import("../components/CreateRecipes.vue")['default']
    'LazyDelete': typeof import("../components/Delete.vue")['default']
    'LazyEdit': typeof import("../components/Edit.vue")['default']
    'LazyFetchUser': typeof import("../components/FetchUser.vue")['default']
    'LazyHeader': typeof import("../components/Header.vue")['default']
    'LazyLogout': typeof import("../components/Logout.vue")['default']
    'LazyRecipeCard': typeof import("../components/RecipeCard.vue")['default']
    'LazyRecipeInsert': typeof import("../components/RecipeInsert.vue")['default']
    'LazyRecipes': typeof import("../components/Recipes.vue")['default']
    'LazyUploadImage': typeof import("../components/UploadImage.vue")['default']
    'LazyCustom': typeof import("../components/custom.vue")['default']
    'LazyFetch': typeof import("../components/fetch.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CreateRecipes: typeof import("../components/CreateRecipes.vue")['default']
export const Delete: typeof import("../components/Delete.vue")['default']
export const Edit: typeof import("../components/Edit.vue")['default']
export const FetchUser: typeof import("../components/FetchUser.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const Logout: typeof import("../components/Logout.vue")['default']
export const RecipeCard: typeof import("../components/RecipeCard.vue")['default']
export const RecipeInsert: typeof import("../components/RecipeInsert.vue")['default']
export const Recipes: typeof import("../components/Recipes.vue")['default']
export const UploadImage: typeof import("../components/UploadImage.vue")['default']
export const Custom: typeof import("../components/custom.vue")['default']
export const Fetch: typeof import("../components/fetch.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCreateRecipes: typeof import("../components/CreateRecipes.vue")['default']
export const LazyDelete: typeof import("../components/Delete.vue")['default']
export const LazyEdit: typeof import("../components/Edit.vue")['default']
export const LazyFetchUser: typeof import("../components/FetchUser.vue")['default']
export const LazyHeader: typeof import("../components/Header.vue")['default']
export const LazyLogout: typeof import("../components/Logout.vue")['default']
export const LazyRecipeCard: typeof import("../components/RecipeCard.vue")['default']
export const LazyRecipeInsert: typeof import("../components/RecipeInsert.vue")['default']
export const LazyRecipes: typeof import("../components/Recipes.vue")['default']
export const LazyUploadImage: typeof import("../components/UploadImage.vue")['default']
export const LazyCustom: typeof import("../components/custom.vue")['default']
export const LazyFetch: typeof import("../components/fetch.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.2_ioredis@5.4.1_magicast@0.3.5_rollup@_vmij26jpp3svejxf3uaxjaoc7m/node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
