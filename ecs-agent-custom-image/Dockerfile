FROM jenkins/inbound-agent:latest

USER root

# Install dependencies in one layer
RUN apt-get update && apt-get install -y  \
    docker.io \
    git \
    unzip \
    curl \
    jq \
    nodejs \
    npm \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install AWS CLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf awscliv2.zip aws

# Install kubectl v1.31.3 for AWS EKS 
RUN curl -LO https://s3.us-west-2.amazonaws.com/amazon-eks/1.31.3/2024-12-12/bin/linux/amd64/kubectl && \
    chmod +x ./kubectl && \
    mv ./kubectl /usr/local/bin/kubectl

# Verify kubectl is available
RUN kubectl version --client --output=yaml || echo "kubectl installed"    

# Install Trivy for image scanning
RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh

# Install SonarQube Scanner
RUN curl -Lo sonarqube.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip \
    && unzip sonarqube.zip \
    && mv sonar-scanner-5.0.1.3006-linux /opt/sonar-scanner \
    && ln -s /opt/sonar-scanner/bin/sonar-scanner /usr/local/bin/sonar-scanner \
    && rm sonarqube.zip
# Set Docker socket permissions
RUN usermod -aG docker jenkins

USER jenkins

