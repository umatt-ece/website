<script setup lang="ts">
import { about } from '@/assets/strings'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
</script>

<template>
  <div class="card">
    <Card>
      <template #content>
        <div id="intro">
          <p class="m-0">
            {{ about.team.content1 }}
          </p>
          <p class="m-0">
            {{ about.team.content2 }}
          </p>
        </div>
        <!-- About: Competition -->
        <Panel :header="about.competition.title" toggleable>
          <p class="m-0">
            {{ about.competition.content }}
          </p>
          <Tabs value="0">
            <TabList>
              <Tab value="0">{{ about.competition.design.title }}</Tab>
              <Tab value="1">{{ about.competition.manufacturing.title }}</Tab>
              <Tab value="2">{{ about.competition.marketing.title }}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <p class="m-0">
                  {{ about.competition.design.content }}
                </p>
              </TabPanel>
              <TabPanel value="1">
                <p class="m-0">
                  {{ about.competition.manufacturing.content }}
                </p>
              </TabPanel>
              <TabPanel value="2">
                <p class="m-0">
                  {{ about.competition.marketing.content }}
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button as="a" target="_blank" severity="secondary"
                  :label="about.competition.website.label"
                  :href="about.competition.website.url" />
        </Panel>
        <br>

        <!-- About: Members -->
        <Panel :header="about.members.title" toggleable>
          <p class="m-0">
            {{ about.members.content }}
          </p>
          <p class="m-0">
            {{ about.members.council }}
          </p>
          <p class="m-0">
            {{ about.members.advisor }}
          </p>
          <p class="m-0">
            {{ about.members.sponsors }}
          </p>
        </Panel>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>