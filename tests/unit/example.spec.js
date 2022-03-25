import { shallowMount, mount } from "@vue/test-utils";
import ExerciseOne from "@/views/ExerciseOne.vue";

import { nextTick } from "vue";

const wrapper = shallowMount(ExerciseOne);

describe("Main", () => {
  it("Button text must be: Show me a useless fact", () => {
    expect(wrapper.html()).toContain("Show me a useless fact");
  });

  it("has a fetch button", () => {
    expect(wrapper.find("#fetchbutton").exists()).toBe(true);
  });

  it("fetched data successfully", async () => {
    const buttonx = wrapper.find("#fetchbutton");
    buttonx.trigger("click");
    await nextTick();
    expect(wrapper.vm.message).toBe("SUCCESS");
  });
});
