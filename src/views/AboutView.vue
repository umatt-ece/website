<script setup lang="ts">
import { generic, about } from '@/assets/strings'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
</script>

<template>
  <div class="card">
    <Card>
      <template #content>
        <!-- Introduction -->
        <h1>
          {{ about.team.title }}
        </h1>
        <div>
          <p>
            {{ about.team.content1 }}
          </p>
          <p>
            {{ about.team.content2 }}
          </p>
          <p>
            {{ about.team.content3 }}
          </p>
        </div>
        <br>

        <!-- Competition Panel -->
        <Panel :header="about.competition.title" toggleable collapsed>
          <p>
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
                <p>
                  {{ about.competition.design.content }}
                </p>
              </TabPanel>
              <TabPanel value="1">
                <p>
                  {{ about.competition.manufacturing.content }}
                </p>
              </TabPanel>
              <TabPanel value="2">
                <p>
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

        <!-- Members Panel -->
        <Panel :header="about.members.title" toggleable collapsed>
          <p>
            {{ about.members.content }}
          </p>
          <p>
            {{ about.members.council }}
          </p>
          <Card class="vertical-buffer-1">
            <template #content>
              <div class="inline">
                <img src="/images/headshot-kam.png" alt="..." class="avatar" />
                <div>
                  <h2>
                    {{ generic.councilMembers.captain.title }}
                  </h2>
                  <p>
                    {{ generic.councilMembers.captain.name }}
                  </p>
                </div>
              </div>
            </template>
          </Card>
          <Card class="vertical-buffer-1">
            <template #content>
              <div class="inline">
                <img src="/images/logo.png" alt="..." class="avatar" />
                <div>
                  <h2>
                    {{ generic.councilMembers.treasurer.title }}
                  </h2>
                  <p>
                    {{ generic.councilMembers.treasurer.name }}
                  </p>
                </div>
              </div>
            </template>
          </Card>
          <Card class="vertical-buffer-1">
            <template #content>
              <div class="inline">
                <img src="/images/headshot-arik.png" alt="..." class="avatar" />
                <div>
                  <h2>
                    {{ generic.councilMembers.mechanicalLead.title }}
                  </h2>
                  <p>
                    {{ generic.councilMembers.mechanicalLead.name }}
                  </p>
                </div>
              </div>
            </template>
          </Card>
          <Card class="vertical-buffer-1">
            <template #content>
              <div class="inline">
                <img src="/images/headshot-zach.png" alt="..." class="avatar" />
                <div>
                  <h2>
                    {{ generic.councilMembers.electricalLead.title }}
                  </h2>
                  <p>
                    {{ generic.councilMembers.electricalLead.name }}
                  </p>
                </div>
              </div>
            </template>
          </Card>
          <p>
            {{ about.members.advisor }}
          </p>
          <p>
            {{ about.members.sponsors }}
          </p>
        </Panel>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.inline {
  display: flex;
  flex-direction: row;
}

.avatar {
  width: 120px;
  height: 120px;
  margin: 0 1rem;
  border-radius: 50%;
}

.vertical-buffer-1 {
  margin: 1rem 0;
}
</style>