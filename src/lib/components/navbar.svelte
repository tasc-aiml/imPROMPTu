<script lang="ts">
  import Icon from "./icon.svelte";
  import { navItems } from "$lib/stores/nav-items";
  import { browser } from "$app/environment";
  import ThemeSwitch from "./theme-switch.svelte";
  import { darkTheme } from "$lib/stores/theme";
  import { menuOpen } from "$lib/stores/stores";
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/button";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import * as Avatar from "$lib/components/ui/avatar";
  import * as Popover from "$lib/components/ui/popover";

  $: {
    if (browser) {
      const mainSection = document.getElementById("main-content");
      const footer = document.getElementsByTagName("footer")[0];
      const navbar = document.getElementsByTagName("nav")[0];

      console.log(mainSection);
      

      if (mainSection && (footer ||  navbar)) {
        if ($menuOpen) {
          mainSection?.classList.add("blur-sm");
          footer?.classList.add("blur-sm");
          navbar?.classList.add("blur-sm");
          document.body.style.overflow = "hidden";
        } else {
          mainSection?.classList.remove("blur-sm");
          footer?.classList.remove("blur-sm");
          navbar?.classList.remove("blur-sm");
          document.body.style.overflow = "auto";
        }
      }
    }
  }
</script>

<nav
  class="w-full h-20 border-b-2 flex justify-center flex-row items-center relative text-foreground"
>
  <!-- logo -->
  <div class="max-w-[90rem] w-full flex flex-row px-6">
    <a
      href="/"
      class="text-4xl w-full text-center md:w-fit font-extrabold hover:cursor-pointer"
      >imPROMPTu</a
    >

    <!-- nav items -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions  a11y-click-events-have-key-events-->
    <ul
      class="flex-row gap-10 text-center flex-grow mx-10 justify-center items-center font-bold text-xl hidden md:flex"
    >
      {#each navItems as item}
        <li
          on:click={() => ($menuOpen = false)}
          class={`${$page.route.id === item.link ? "underline" : ""}`}
        >
          <a href={item.link}>{item.name}</a>
        </li>
      {/each}
    </ul>

    <!-- profiles -->
    <div class="w-fit gap-4 md:flex hidden">
      <ThemeSwitch class="size-10 md:block hidden" />
      {#if $page.data.session === null}
        <Button on:click={() => signIn()}>Sign In</Button>
      {:else}
        <Popover.Root>
          <Popover.Trigger>
            <Avatar.Root>
              <Avatar.Image src={$page.data.session?.user?.image ?? "/images/profile-placeholder.png"} alt="@gg" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
          </Popover.Trigger>
          <Popover.Content>
            <Button on:click={() => signOut()} class="w-full">Sign Out</Button>
          </Popover.Content>
        </Popover.Root>
      {/if}
    </div>

    <!-- mobile options -->
    <div class="absolute top-0 right-0 flex flex-row justify-center h-20 pr-4">
      <!-- <ThemeSwitch class="relative size-10 md:block hidden" /> -->
      <Icon
        icon="charm:menu-hamburger"
        color={`${$darkTheme === false ? "black" : "white"}`}
        Style="md:hidden block"
        on:click={() => {
          $menuOpen = true;
        }}
        class="relative size-10"
      />
    </div>
  </div>
</nav>

<!-- slider -->
<div
  class={`fixed bg-background text-foreground border-l-2 h-screen w-[300px] z-50 right-0 transform transition-transform ease-in-out duration-500 ${
    $menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <!-- close button -->
  <Icon
    icon="mingcute:close-fill"
    class="absolute right-4 top-5 size-10"
    color={`${$darkTheme === false ? "black" : "white"}`}
    on:click={() => {
      $menuOpen = false;
    }}
  />

  <!-- nav options -->
  <ul class="flex flex-col gap-y-8 mt-24 text-center">
    {#each navItems as item}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions  a11y-click-events-have-key-events-->
      <li on:click={() => ($menuOpen = false)}>
        <a href={item.link}>{item.name}</a>
      </li>
    {/each}
    <ThemeSwitch class="size-8" style="mx-auto" />
  </ul>

  <!-- profiles -->
  <div class="w-full mt-8 flex justify-center">
    <div class="w-fit gap-4">
      <ThemeSwitch class="size-10 md:block hidden" />
      {#if $page.data.session === null}
        <Button on:click={() => signIn()}>Sign In</Button>
      {:else}
        <Popover.Root>
          <Popover.Trigger>
            <Avatar.Root>
              <Avatar.Image src={$page.data.session?.user?.image ?? "/images/profile-placeholder.png"} alt="@gg" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
          </Popover.Trigger>
          <Popover.Content>
            <Button on:click={() => signOut()} class="w-full">Sign Out</Button>
          </Popover.Content>
        </Popover.Root>
      {/if}
    </div>
  </div>
</div>
